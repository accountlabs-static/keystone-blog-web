import React from 'react'
import { getHeroPosts, getPostsLatests } from '@/utils/api'
import { Homepage } from '@/types/homePageType'
import HomeLayout from '@/components/Layout/home'
import { AllCategories } from '@/components/HomeCategories/All'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '../constants/links'
import { Metadata, ResolvingMetadata } from 'next'

const getPosts = async (): Promise<Homepage> => {
  const POST_COUNT = 9
  const heroPosts = await getHeroPosts()
  const latests = await getPostsLatests(POST_COUNT)
  try {
    return {
      description: heroPosts.description,
      heroPost: heroPosts.hero_post.data,
      subHeroFirst: heroPosts.sub_hero_first.data,
      subHeroSecond: heroPosts.sub_hero_second.data,
      latests,
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return {
      description: '',
      heroPost: null,
      subHeroFirst: null,
      subHeroSecond: null,
      latests: [],
    }
  }
}

export async function generateMetadata(
  _params: any,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const homepage = await getPosts()

  return {
    title: 'Keystone\'s Blog',
    description: homepage.description,
    alternates: {
      canonical: BLOG_HOME_PAGE,
    },
    openGraph: {
      title: 'Keystone\'s Blog',
      description: homepage.description,
      images: [`${IMAGE_CDN}/homepage.png`],
      url: BLOG_HOME_PAGE,
    },
  }
}

export default async function Home() {
  const homepage = await getPosts()
  return (
    <>
      <HomeLayout description={homepage.description}>
        <AllCategories homepage={homepage} />
      </HomeLayout>
    </>
  )
}
