import React from 'react'
import readingTime from 'reading-time'
import { postConverter } from './utils'
import Head from 'next/head'
import { fetchAPI, getPostsAll } from '@/utils/api'
import Content from './Content'

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
    <>
      <Head>
        <title>{postModel.seo.title}</title>
        <meta name="description" content={postModel.seo.description} />
        <link rel="canonical" href={postModel.seo.canonicalURL} />
        <meta property="og:site_name" content="Keystone's Blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postModel.seo.title} />
        <meta property="og:description" content={postModel.seo.description} />
        <meta property="og:image" content={postModel.heroImage.url} />
        <meta property="og:url" content={postModel.seo.canonicalURL} />
        <meta property="og:image" content={postModel.heroImage.url} />
        <meta property="og:url" content={postModel.seo.canonicalURL} />
      </Head>
      <Content
        article={article}
        postModel={postModel}
        minutesToRead={minutesToRead}
      />
    </>
  )
}
