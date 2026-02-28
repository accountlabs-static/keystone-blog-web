import { Post, PostModel } from '@/types/postDetailPageType'
import { BLOG_HOME_PAGE } from '@/constants/links'
import markedAlert from 'marked-alert'
import { getHeadings, getMarkDownParser } from './markdown'

export const getPublishTime = (publishAt: string) => {
  const date = new Date(publishAt)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
  return formattedDate
}

const postBodyConverter = (postBody: string): string => {
  const markDownParser = getMarkDownParser(postBody)
  markDownParser.use(markedAlert())
  return markDownParser.parse(postBody) as string
}

export const postConverter = (post: Post): PostModel => {
  return {
    bodyText: postBodyConverter(post.body_text),
    headings: getHeadings(post.body_text),
    summary: post.summary,
    title: post.title,
    category: post.category,
    publishTime: getPublishTime(post.publishedAt),
    locale: post.locale,
    slug: post.slug,
    heroImage: {
      url: post.hero_image.data.attributes.url,
      alt: post.hero_image.data.attributes.name,
    },
    seo: {
      title: post.seo?.metaTitle || `${post.title} | Keystone Hardware Wallet`,
      description: post.seo?.metaDescription || post.title,
      canonicalURL: post.seo?.canonicalURL || `${BLOG_HOME_PAGE}/${post.slug}`,
    },
  }
}
