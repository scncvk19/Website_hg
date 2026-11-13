import type { Metadata } from "next";
import InstagramFeed from "@/components/InstagramFeed";
export const metadata: Metadata = { title: "Beiträge & Aktuelles" };
export const dynamic = "force-dynamic";
export default function Page() { return <InstagramFeed lang="de"/>; }
