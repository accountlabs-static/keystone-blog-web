import React from 'react'
import readingTime from 'reading-time'
import { postConverter } from './utils'
import { fetchAPI, getPostsAll, getRedirects } from '@/utils/api'
import Content from './Content'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound, redirect } from 'next/navigation'

export async function generateMetadata(
  params: any,
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
    title: "Keystone's Blog",
    description: postModel.seo.description,
    alternates: {
      canonical: postModel.seo.canonicalURL,
    },
    openGraph: {
      siteName: "Keystone's Blog",
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

  const redirects = await getRedirects()
  const hasRedirect = redirects.find((it) => it.from === `/${post}`)

  if (hasRedirect) {
    const toPost = hasRedirect.to.slice(1)
    redirect(toPost)
  }

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
    notFound()
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
