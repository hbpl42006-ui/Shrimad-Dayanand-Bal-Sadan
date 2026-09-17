import { MetadataRoute } from 'next';
import { siteApi } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://srimaddayanandbalsadan.in';

  const staticRoutes = [
    '',
    '/about',
    '/our-story',
    '/our-work',
    '/education',
    '/skills',
    '/facilities',
    '/child-welfare',
    '/gallery',
    '/events',
    '/support-us',
    '/transparency',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route === '/support-us' ? 0.9 : 0.8,
  }));

  try {
    const events = await siteApi.getEvents();
    const eventRoutes = events.map((e) => ({
      url: `${baseUrl}/events/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    return [...staticRoutes, ...eventRoutes];
  } catch {
    return staticRoutes;
  }
}
