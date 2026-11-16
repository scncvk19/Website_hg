import type { Metadata } from "next";
import ContactThanks from "@/components/ContactThanks";
export const metadata: Metadata = { title: "Vielen Dank" , robots: { index: false, follow: false } };
export default function Page() { return <ContactThanks lang="de"/>; }
