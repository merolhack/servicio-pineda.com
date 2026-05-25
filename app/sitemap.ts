import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://servicio-pineda.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
