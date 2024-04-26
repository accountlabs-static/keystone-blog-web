import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getHeroPosts, getPostsByCategory } from '@/utils/api';
import { Category } from '@/constants/categories';
import { Homepage } from '@/types/homePageType';
import HomeLayout from '@/components/Layout/home';
import { AllCategories } from '@/components/HomeCategories/All';

interface HomeProps {
  homepage: Homepage;
}

const Home: FC<HomeProps> = ({ homepage }) => {
  return (
    <HomeLayout description={homepage.description}>
      <AllCategories homepage={homepage} />,
    </HomeLayout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const POST_COUNT_IN_CATEGORY = 3;
  const heroPosts = await getHeroPosts();
  try {
    const categoryPosts = await Promise.all([
      getPostsByCategory(Category.HardwareWallet, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.CryptoSecurity, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Bitcoin, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Partnerships, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Enterprise, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Other, POST_COUNT_IN_CATEGORY),
    ]);
    return {
      props: {
        homepage: {
          description: heroPosts.description,
          heroPost: heroPosts.hero_post.data,
          subHeroFirst: heroPosts.sub_hero_first.data,
          subHeroSecond: heroPosts.sub_hero_second.data,
          [Category.HardwareWallet]: categoryPosts[0],
          [Category.CryptoSecurity]: categoryPosts[1],
          [Category.Bitcoin]: categoryPosts[2],
          [Category.Partnerships]: categoryPosts[3],
          [Category.Enterprise]: categoryPosts[4],
          [Category.Other]: categoryPosts[5],
        },
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      props: {
        homepage: {
          description: '',
          heroPost: null,
          subHeroFirst: null,
          subHeroSecond: null,
          [Category.HardwareWallet]: [],
          [Category.CryptoSecurity]: [],
          [Category.Bitcoin]: [],
          [Category.Partnerships]: [],
          [Category.Enterprise]: [],
          [Category.Other]: [],
        },
      },
      revalidate: 1,
    };
  }
};

export default Home;
