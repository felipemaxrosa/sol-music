import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/destaques", priority: 0.8 },
    { path: "/equipe", priority: 0.7 },
    { path: "/contato", priority: 0.7 },
  ];

  return rotas.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly",
    priority,
  }));
}
