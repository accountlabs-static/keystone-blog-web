import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import { getHeroPosts, getPostsByCategory } from '@/utils/api'
import { Category } from '@/constants/categories'
import HomeLayout from '@/components/Layout/home'
import { OtherCategories } from '@/components/HomeCategories/Other'
import { slugToCategoryEnum, slugToTitle } from '@/utils/helpers'
import { Post } from '@/types/postDetailPageType'
import { postConverter } from '../[post]/utils'
import Head from 'next/head'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '@/constants/links'

interface CategoriesPageProps {
  errorCode?: number
  homeDescription: string
  posts: Post[]
  category: Category
  slug: string
  title: string
}

const CategoryPage: FC<CategoriesPageProps> = ({
  errorCode,
  homeDescription,
  posts,
  category,
  slug,
  title,
}) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const categoryURL = `${BLOG_HOME_PAGE}/${slug}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={homeDescription} />
        <link rel="canonical" href={categoryURL} />
        <meta property="og:site_name" content="Keystone's Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:image" content={`${IMAGE_CDN}/homepage.png`} />
        <meta property="og:url" content={categoryURL} />
      </Head>
      <HomeLayout description={homeDescription}>
        <OtherCategories title={title} category={category} posts={posts} />
      </HomeLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(Category).map((category) => ({
      params: {
        category,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async ({
  params,
}) => {
  const POST_COUNT_IN_CATEGORY = 5
  const categorySlug = params.category as string
  const category = slugToCategoryEnum(params.category as string) as Category
  const categoryTitle = slugToTitle(params.category as string) as Category

  if (!(category in Category)) {
    return {
      props: {
        errorCode: 404,
        homeDescription: '',
        posts: [],
        category: category,
        slug: categorySlug,
        title: categoryTitle,
      },
      revalidate: 1,
    }
  }

  const heroPosts = await getHeroPosts()
  const posts = (
    await getPostsByCategory(categoryTitle, POST_COUNT_IN_CATEGORY)
  )
    .map((it) => postConverter(it.attributes))
    .map((it) => ({ ...it, slug: `/${it.slug}` }))
  try {
    return {
      props: {
        homeDescription: heroPosts.description,
        posts,
        category: category,
        slug: categorySlug,
        title: categoryTitle,
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return {
      props: {
        homeDescription: '',
        posts: [],
        category: category,
        slug: categorySlug,
        title: categoryTitle,
      },
      revalidate: 1,
    }
  }
}

export default CategoryPage
