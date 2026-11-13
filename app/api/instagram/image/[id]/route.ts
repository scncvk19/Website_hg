import { allowedImageUrl, getInstagramFeed } from "@/lib/instagram";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
const MAX_BYTES = 8 * 1024 * 1024;
const imageTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);
const fail = (status: number) => new Response(null, { status, headers: { "Cache-Control": "no-store" } });

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^\d{1,30}$/.test(id)) return fail(404);
  const feed = await getInstagramFeed();
  const url = allowedImageUrl(feed.posts.find(post => post.id === id)?.imageUrl);
  if (!url) return fail(404);
  try {
    const upstream = await fetch(url, { cache: "no-store", redirect: "error", signal: AbortSignal.timeout(10000) });
    const type = (upstream.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    const length = Number(upstream.headers.get("content-length") || 0);
    if (!upstream.ok || !upstream.body || !imageTypes.has(type) || length > MAX_BYTES) {
      await upstream.body?.cancel();
      return fail(502);
    }
    const reader = upstream.body.getReader();
    const chunks: Uint8Array[] = [];
    let total = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > MAX_BYTES) { await reader.cancel(); return fail(502); }
        chunks.push(value);
      }
    } finally { reader.releaseLock(); }
    const bytes = new Uint8Array(total);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    return new Response(bytes, { headers: { "Content-Type": type, "Content-Length": String(total), "Cache-Control": "public, max-age=300", "X-Content-Type-Options": "nosniff" } });
  } catch { return fail(502); }
}
