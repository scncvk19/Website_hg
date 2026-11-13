import "server-only";

export type InstagramPost = {
  id: string;
  caption: string;
  permalink: string;
  timestamp: string;
  kind: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  imageUrl: string | null;
};
export type InstagramFeed = { status: "disabled" | "unavailable" | "ready"; posts: InstagramPost[]; updatedAt: string | null };
const empty = (status: "disabled" | "unavailable"): InstagramFeed => ({ status, posts: [], updatedAt: null });
const TTL = 60 * 60 * 1000;
let cache: { feed: InstagramFeed; expires: number } | undefined;
let pending: Promise<InstagramFeed> | undefined;

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid Instagram response");
  return value as Record<string, unknown>;
}
export function allowedImageUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 4096) return null;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (url.protocol !== "https:" || url.username || url.password || url.port || !["cdninstagram.com", "fbcdn.net"].some(domain => host === domain || host.endsWith("." + domain))) return null;
    return url.href;
  } catch { return null; }
}
function normalize(value: unknown): InstagramPost | null {
  try {
    const row = record(value);
    if (typeof row.id !== "string" || !/^\d{1,30}$/.test(row.id)) return null;
    if (row.media_type !== "IMAGE" && row.media_type !== "VIDEO" && row.media_type !== "CAROUSEL_ALBUM") return null;
    if (typeof row.permalink !== "string" || typeof row.timestamp !== "string" || !Number.isFinite(Date.parse(row.timestamp))) return null;
    const link = new URL(row.permalink);
    if (link.protocol !== "https:" || !["www.instagram.com", "instagram.com"].includes(link.hostname) || link.username || link.password || link.port || !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(link.pathname)) return null;
    return {
      id: row.id, kind: row.media_type, caption: typeof row.caption === "string" ? row.caption.slice(0, 2200) : "",
      permalink: link.origin + link.pathname, timestamp: new Date(row.timestamp).toISOString(),
      imageUrl: allowedImageUrl(row.media_type === "VIDEO" ? row.thumbnail_url : row.media_url),
    };
  } catch { return null; }
}
async function graph(path: string, fields: string, token: string, limit?: number) {
  const version = process.env.HG_INSTAGRAM_API_VERSION || "v25.0";
  if (!/^v\d+\.0$/.test(version)) throw new Error("Invalid API version");
  const url = new URL("https://graph.instagram.com/" + version + "/" + path);
  url.searchParams.set("fields", fields);
  if (limit) url.searchParams.set("limit", String(limit));
  const response = await fetch(url, { headers: { Authorization: "Bearer " + token }, cache: "no-store", redirect: "error", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error("Instagram request failed");
  return record(await response.json());
}
async function load(token: string): Promise<InstagramFeed> {
  try {
    const account = await graph("me", "user_id,username", token);
    if (typeof account.username !== "string" || account.username.toLowerCase() !== "hgsysteme") throw new Error("Unexpected Instagram account");
    const id = String(account.user_id ?? account.id ?? "");
    if (!/^\d{1,30}$/.test(id)) throw new Error("Invalid account id");
    const result = await graph(id + "/media", "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp", token, 25);
    if (!Array.isArray(result.data)) throw new Error("Invalid media list");
    const posts = result.data.map(normalize).filter((post): post is InstagramPost => post !== null).sort((a,b) => Date.parse(b.timestamp)-Date.parse(a.timestamp)).slice(0,9);
    return { status: "ready", posts, updatedAt: new Date().toISOString() };
  } catch {
    // Never log raw API responses, URLs, headers or tokens.
    console.warn("Instagram feed unavailable; check account authorization and configuration.");
    return empty("unavailable");
  }
}
export async function getInstagramFeed(): Promise<InstagramFeed> {
  const token = process.env.HG_INSTAGRAM_ACCESS_TOKEN?.trim();
  if (process.env.HG_INSTAGRAM_ENABLED !== "true" || !token) return empty("disabled");
  if (cache && Date.now() < cache.expires) return cache.feed;
  if (!pending) {
    pending = load(token).then(feed => {
      cache = { feed, expires: Date.now() + (feed.status === "ready" ? TTL : 5 * 60 * 1000) };
      return feed;
    }).finally(() => { pending = undefined; });
  }
  return pending;
}
