import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** AI + search crawlers that power ChatGPT, Claude, Gemini, Perplexity, etc. */
const AI_USER_AGENTS = [
  "GPTBot", // OpenAI training
  "ChatGPT-User", // ChatGPT browsing
  "OAI-SearchBot", // ChatGPT search citations
  "ClaudeBot", // Anthropic training
  "Claude-User", // Claude browsing
  "Claude-SearchBot", // Claude search citations
  "Google-Extended", // Gemini / AI Overviews
  "Googlebot",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
  "FacebookBot",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: "https://www.dubai-buildings.com/sitemap.xml",
    host: "https://www.dubai-buildings.com",
  };
}
