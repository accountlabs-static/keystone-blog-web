import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import { getHeroPosts, getPostsByCategory } from '@/utils/api'
import { Category } from '@/constants/categories'
import HomeLayout from '@/components/Layout/home'
import { OtherCategories } from '@/components/HomeCategories/Other'
import { slugToUpperCase, slugToUpperCaseRecoverEnum } from '@/utils/helpers'
import { Post } from '@/types/postDetailPageType'
import { postConverter } from '../[post]/utils'

interface CategoriesPageProps {
  errorCode?: number
  homeDescription: string
  posts: Post[]
  category: Category
}

const CategoryPage: FC<CategoriesPageProps> = ({
  errorCode,
  homeDescription,
  posts,
  category,
}) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <HomeLayout description={homeDescription}>
      <OtherCategories category={category} posts={posts} />
    </HomeLayout>
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
  const categoryKey = slugToUpperCase(params.category as string) as Category
  const categoryValue = slugToUpperCaseRecoverEnum(
    params.category as string
  ) as Category

  if (!(categoryKey in Category)) {
    return {
      props: {
        errorCode: 404,
        homeDescription: '',
        posts: [],
        category: categoryKey,
      },
      revalidate: 1,
    }
  }

  const heroPosts = await getHeroPosts()
  const posts = (
    await getPostsByCategory(categoryValue, POST_COUNT_IN_CATEGORY)
  )
    .map((it) => postConverter(it.attributes))
    .map((it) => ({ ...it, slug: `/${it.slug}` }))
  try {
    return {
      props: {
        homeDescription: heroPosts.description,
        posts,
        category: categoryKey,
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return {
      props: {
        homeDescription: '',
        posts: [],
        category: categoryKey,
      },
      revalidate: 1,
    }
  }
}

export default CategoryPage
