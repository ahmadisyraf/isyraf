import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://isyraf.vercel.app",
      lastModified: new Date(),
    },
  ];
}
