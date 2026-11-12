import { company } from "./content";

export type SocialPlatform = "github" | "instagram" | "linkedin";
type SocialProfile = { platform: SocialPlatform; label: string; url: string };

// Nur öffentliche, freigegebene HG-Systeme-Firmenprofile. Leere URLs werden ausgeblendet.
export const socialProfiles: SocialProfile[] = [
  { platform: "github", label: "GitHub", url: "https://github.com/Hg-Systeme428" },
  { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/hgsysteme/" },
  { platform: "linkedin", label: "LinkedIn", url: company.linkedin },
];
