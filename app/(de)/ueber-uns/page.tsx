import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = { title: "Über uns", description: "Philosophie, IT-Sicherheit, Unternehmensgeschichte und das Team von HG-Systeme in Eberbach." };
export default function Page() { return <AboutPage lang="de"/>; }
