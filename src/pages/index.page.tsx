import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getHeroPosts, getPostsByCategory } from '@/utils/api';
import { Category } from '@/constants/categories';
import { Homepage } from '@/types/homePageType';
import HomeLayout from '@/components/Layout/home';
import { AllCategories } from '@/components/HomeCategories/All';
import { BLOG_HOME_PAGE, IMAGE_CDN } from '../constants/links';
import Head from 'next/head';

interface HomeProps {
  homepage: Homepage
}

const Home: FC<HomeProps> = ({ homepage }) => {

  return (
    <>
      <Head>
        <title>Keystone&apos;s Blog</title>
        <meta name="description" content={homepage.description} />
        <link rel='canonical' href={BLOG_HOME_PAGE} />
        <meta property="og:title" content="Keystone's Blog" />
        <meta property="og:description" content={homepage.description} />
        <meta property="og:image" content={`${IMAGE_CDN}/homepage.png`}/>
        <meta property="og:url" content={BLOG_HOME_PAGE}/>
      </Head>
      <HomeLayout description={homepage.description}>
        <AllCategories homepage={homepage} />,
      </HomeLayout>
    </>

  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const POST_COUNT = 9
  const heroPosts = await getHeroPosts()
  const latests = await getPostsLatests(POST_COUNT)
  try {
    return {
      props: {
        homepage:{
          description: heroPosts.description,
          heroPost: heroPosts.hero_post.data,
          subHeroFirst: heroPosts.sub_hero_first.data,
          subHeroSecond: heroPosts.sub_hero_second.data,
          latests,
        },
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return {
      props: {
        homepage: {
          description: '',
          heroPost: null,
          subHeroFirst: null,
          subHeroSecond: null,
          latests: [],
        },
      },
      revalidate: 1,
    }
  }
}

export default Home
