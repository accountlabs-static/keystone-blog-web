import React from 'react'
import { getHeroPosts, getPostsLatests } from '@/utils/api'
import { Homepage } from '@/types/homePageType'
import HomeLayout from '@/components/Layout/home'
import { AllCategories } from '@/components/HomeCategories/All'
import { BLOG_HOME_PAGE, IMAGE_CDN } from '../constants/links'
import Head from 'next/head'

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

export default async function Home() {
  const homepage = await getPosts()
  return (
    <>
      <Head>
        <title>Keystone&apos;s Blog</title>
        <meta name="description" content={homepage.description} />
        <link rel="canonical" href={BLOG_HOME_PAGE} />
        <meta property="og:title" content="Keystone's Blog" />
        <meta property="og:description" content={homepage.description} />
        <meta property="og:image" content={`${IMAGE_CDN}/homepage.png`} />
        <meta property="og:url" content={BLOG_HOME_PAGE} />
      </Head>
      <HomeLayout description={homepage.description}>
        <AllCategories homepage={homepage} />
      </HomeLayout>
    </>
  )
}
