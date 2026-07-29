import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/personal-site" : "",
  assetPrefix: isGitHubPages ? "/personal-site/" : undefined,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
