import type { NextConfig } from "next";
import { publicIndexing } from "./lib/seo";

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), payment=()" },
        ...(!publicIndexing ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : [])
      ]
    }];
  }
};
export default config;
