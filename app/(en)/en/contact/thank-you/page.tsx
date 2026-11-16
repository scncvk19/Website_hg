import type { Metadata } from "next";
import ContactThanks from "@/components/ContactThanks";
export const metadata: Metadata = { title: "Thank you" , robots: { index: false, follow: false } };
export default function Page() { return <ContactThanks lang="en"/>; }
