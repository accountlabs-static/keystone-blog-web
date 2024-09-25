import { Category } from '@/constants/categories'
import { BLOG_HOME_PAGE } from '@/constants/links'
import { getPostsAll } from '@/utils/api'
import { slugify } from '@/utils/helpers'
import type { MetadataRoute } from 'next'

function formatDateTime(datetime: Date | string) {
  const date = new Date(datetime)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从 0 开始
  const day = String(date.getDate()).padStart(2, '0')

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const offset = -date.getTimezoneOffset()
  const absOffset = Math.abs(offset)
  const offsetHours = String(Math.floor(absOffset / 60)).padStart(2, '0')
  const offsetMinutes = String(absOffset % 60).padStart(2, '0')
  const offsetSign = offset >= 0 ? '+' : '-'

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: `${BLOG_HOME_PAGE}/`,
    lastModified: formatDateTime(new Date()),
  }

  const postsData = await getPostsAll()

  const posts = postsData.map((it) => ({
    url: `${BLOG_HOME_PAGE}/${it.attributes.slug}`,
    lastModified: formatDateTime(new Date(it.attributes.updatedAt)),
  }))

  const categories = Object.entries(Category).map(([_key, value]) => ({
    url: `${BLOG_HOME_PAGE}/categories/${slugify(value)}`,
    lastModified: formatDateTime(new Date()),
  }))

  return [home, ...posts, ...categories]
}
