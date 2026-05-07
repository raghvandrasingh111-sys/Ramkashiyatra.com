import { MetadataRoute } from "next";
import { packages } from "@/data/packages";
import { blogs } from "@/data/blogs";

const baseUrl = "https://www.ramkashiyatra.com";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

const make = (
  path: string,
  priority = 0.7,
  changeFrequency: ChangeFreq = "weekly"
): MetadataRoute.Sitemap[number] => ({
  url: `${baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const tourPackages = packages.map((pkg) =>
    make(`/tour-packages/${pkg.slug}`, 0.85, "weekly")
  );

  const blogPosts = blogs.map((post) =>
    make(`/blog/${post.slug}`, 0.7, "weekly")
  );

  return [
    /* Hub pages */
    make("/", 1.0, "daily"),
    make("/tour-packages", 0.95, "daily"),
    make("/hotels", 0.85, "weekly"),
    make("/blog", 0.8, "weekly"),
    make("/enquire-now", 0.8, "monthly"),

    /* Destination keyword hub pages */
    make("/kashi-yatra-package", 0.95, "weekly"),
    make("/ayodhya-tour-package", 0.95, "weekly"),
    make("/varanasi-tour-package", 0.95, "weekly"),
    make("/kashi-ayodhya-tour-package", 0.95, "weekly"),
    make("/banaras-kashi-ayodhya-travel-guide", 0.92, "weekly"),

    /* From-city packages (programmatic SEO) */
    make("/kashi-yatra-package-from-delhi", 0.85, "weekly"),
    make("/kashi-yatra-package-from-mumbai", 0.85, "weekly"),
    make("/kashi-yatra-package-from-gujarat", 0.85, "weekly"),
    make("/kashi-yatra-package-from-punjab", 0.85, "weekly"),
    make("/kashi-yatra-package-from-bihar", 0.85, "weekly"),

    /* Legal */
    make("/privacy-policy", 0.3, "yearly"),
    make("/terms-conditions", 0.3, "yearly"),

    /* Dynamic */
    ...tourPackages,
    ...blogPosts,
  ];
}
