import React from 'react'
import { getHeroPosts, getPostsByCategory } from '@/utils/api'
import { Category } from '@/constants/categories'
import HomeLayout from '@/components/Layout/home'
import { OtherCategories } from '@/components/HomeCategories/Other'
import { slugify, slugToTitle } from '@/utils/helpers'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '@/constants/links'
import { Metadata, ResolvingMetadata } from 'next'

interface CategoriesPageProps {
  params: {
    category: Category
    slug: string
    title: string
    homeDescription: string
  }
}

export async function generateMetadata(
  { params }: { params: { category: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { category } = params
  const title = slugToTitle(category as string)

  const heroPosts = await getHeroPosts()

  const slug = slugify(category)
  const homeDescription = heroPosts.description
  const categoryURL = `${BLOG_HOME_PAGE}/${slug}`

  return {
    title: `${title} | Keystone's Blog`,
    description: homeDescription,
    alternates: {
      canonical: categoryURL,
    },
    openGraph: {
      siteName: 'Keystone\'s Blog',
      type: 'article',
      title: title,
      description: homeDescription,
      images: [`${IMAGE_CDN}/homepage.png`],
      url: categoryURL,
    },
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
  const {data: posts} = await getPostsByCategory(categoryTitle, POST_COUNT)

  const homeDescription = heroPosts.description

  return (
    <>
      <HomeLayout description={homeDescription}>
        <OtherCategories title={title} category={category} posts={posts} />
      </HomeLayout>
    </>
  )
}
