import React from 'react'
import { getHeroPosts, getPostsByCategory } from '@/utils/api'
import { Category } from '@/constants/categories'
import HomeLayout from '@/components/Layout/home'
import { OtherCategories } from '@/components/HomeCategories/Other'
import { slugify, slugToTitle } from '@/utils/helpers'
import Head from 'next/head'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '@/constants/links'

interface CategoriesPageProps {
  params: {
    category: Category
    slug: string
    title: string
    homeDescription: string
  }
}

export async function generateStaticParams() {
  const routes = Object.keys(Category).map((category) => ({
    category,
  }))

  return routes
}

const POST_COUNT = 5

export default async function CategoryPage({ params }: CategoriesPageProps) {
  const { category } = params
  const title = slugToTitle(category as string)
  const categoryTitle = slugToTitle(category as string) as Category

  const heroPosts = await getHeroPosts()
  const posts = await getPostsByCategory(categoryTitle, POST_COUNT)

  const slug = slugify(category)
  const homeDescription = heroPosts.description
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
