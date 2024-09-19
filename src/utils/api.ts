import qs from 'qs'
import { Category } from '../constants/categories'

const contentUrl = process.env.NEXT_PUBLIC_CONTENT_URL
const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const mergedOptions = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${contentUrl}/api${path}${queryString ? `?${queryString}` : ''}`
  const response = await fetch(requestUrl, mergedOptions)

  if (!response.ok) {
    const api = `api(${requestUrl})`
    console.error(`Request failed because ${api}:`, response.statusText)
    throw new Error(`An error occurred ${api}please try again`)
  }
  const data = await response.json()
  return data
}

export async function getHeroPosts() {
  const heroPostsRes = await fetchAPI('/home-page', {
    populate: {
      hero_post: {
        populate: {
          hero_image: {
            fields: ['name', 'url'],
          },
        },
      },
      sub_hero_first: {
        populate: {
          hero_image: {
            fields: ['name', 'url'],
          },
        },
      },
      sub_hero_second: {
        populate: {
          hero_image: {
            fields: ['name', 'url'],
          },
        },
      },
    },
  })
  return heroPostsRes.data.attributes
}

export async function getPostsLatests(count: number, skip: number = 0) {
  const posts = await fetchAPI('/posts', {
    populate: {
      hero_image: {
        fields: ['name', 'url'],
      },
    },
    pagination: {
      start: skip,
      limit: count,
    },
    sort: ['publishedAt:desc'],
  })
  return posts.data
}

export async function getPostsAll() {
  const posts = await fetchAPI('/posts', {
    sort: ['publishedAt:desc'],
    pagination: {
      limit: Infinity,
    },
  })
  return posts.data
}

export async function getPostsByCategory(
  category: Category,
  count: number,
  skip: number = 0
) {
  const posts = await fetchAPI('/posts', {
    populate: {
      hero_image: {
        fields: ['name', 'url'],
      },
    },
    pagination: {
      start: skip,
      limit: count,
    },
    sort: ['publishedAt:desc'],
    filters: {
      category: {
        $eq: category,
      },
    },
  })
  return posts.data
}

export async function getRedirects() {
  const redirects = await fetchAPI('/redirects')

  return redirects.redirects
}
