import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
export const metadata: Metadata = { title: "Kontakt & Erstgespräch" };
export const dynamic = "force-dynamic";
export default function Page() { return <ContactPage lang="de"/>; }
