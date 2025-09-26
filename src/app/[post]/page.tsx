import React from 'react'
import readingTime from 'reading-time'
import { postConverter } from './utils'
import { fetchAPI, getPostsAll } from '@/utils/api'
import Content from './Content'
import { Metadata, ResolvingMetadata } from 'next'

// 强制动态渲染，禁用缓存
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(
  { params }: { params: { post: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { post } = params
  const articlesRes = await fetchAPI('/posts', {
    filters: {
      slug: post,
    },
    populate: {
      hero_image: {
        fields: ['name', 'url'],
      },
    },
  })

  const article = articlesRes.data[0]

  if (!article) {
    return {}
  }

  const postModel = postConverter(article.attributes)

  return {
    title: postModel.seo.title,
    description: postModel.seo.description,
    alternates: {
      canonical: postModel.seo.canonicalURL,
    },
    openGraph: {
      siteName: 'Keystone\'s Blog',
      type: 'article',
      title: postModel.seo.title,
      description: postModel.seo.description,
      images: [postModel.heroImage.url],
      url: postModel.seo.canonicalURL,
    },
  }
}

export async function generateStaticParams() {
  const postAll = await getPostsAll()
  const routes = postAll.map((it) => ({ post: it.attributes.slug }))
  return routes
}

export default async function PostDetail({
  params,
}: {
  params: {
    post: string
  }
}) {
  const { post } = params
  const articlesRes = await fetchAPI('/posts', {
    filters: {
      slug: post,
    },
    populate: {
      hero_image: {
        fields: ['name', 'url'],
      },
    },
  })

  if (!articlesRes.data[0]) {
    return {
      errorCode: 404,
    }
  }

  const article = articlesRes.data[0]

  const postModel = postConverter(article.attributes)
  const minutesToRead = Math.ceil(readingTime(postModel.bodyText).minutes)

  return (
    <Content
      article={article}
      postModel={postModel}
      minutesToRead={minutesToRead}
    />
  )
}
