import { MetadataRoute } from 'next';
import { packages } from '@/data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ramkashiyatra.com';

  const tourEntries: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${baseUrl}/tour-packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tour-packages`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/enquire-now`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...tourEntries,
  ];
}
