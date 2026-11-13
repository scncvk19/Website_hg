import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = { title: "About us", description: "Philosophy, IT security, company history and the team at HG-Systeme in Eberbach." };
export default function Page() { return <AboutPage lang="en"/>; }
