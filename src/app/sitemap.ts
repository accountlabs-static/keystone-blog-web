import { getPostsAll } from '@/utils/api'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: '/',
    lastModified: new Date(),
  }

  const postsData = await getPostsAll()

  const posts = postsData.map((it) => ({
    url: `/${it.attributes.slug}`,
    lastModified: it.attributes.updatedAt,
  }))

  return [home, ...posts]
}
