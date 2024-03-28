import React, { FC } from 'react';
import { Description, HomeMain, HomeWrapper, Title, TitleAndDescription, TopBanner } from './index.style';
import { GetStaticProps } from 'next';
import { getHeroPosts, getPostsByCategory } from '../utils/api';
import { Category } from '../constants/categories';
import { Homepage, homepageConverter } from './utils';
import HeroModule from '../components/HeroModule';
import CategoryModule from '../components/CategoryModule';
import Image from 'next/image';
import Categories from '../components/Categories';

interface HomeProps {
  homepage: Homepage;
}

const Home: FC<HomeProps> = ({homepage}) => {
  const homepageModel = homepageConverter(homepage);
  const title = 'Keystone\'s Blog';
  const description = 'Discover the latest news, development and security tips to safeguard your assets with Keystone.';
  return <HomeWrapper>
    <TopBanner>
      <TitleAndDescription>
        <Title>
          Keystone's <em>Blog</em>
        </Title>
        <Description>
          {description}
        </Description>
      </TitleAndDescription>
      <Image src='/homepage.png' alt='keystone' height={350} width={540} />
    </TopBanner>
    <HomeMain>
      <Categories />
      <HeroModule heroPost={homepageModel.heroPost} subHeroFirst={homepageModel.subHeroFirst} subHeroSecond={homepageModel.subHeroSecond} />
      <CategoryModule category={Category.Enterprise} posts={homepageModel.Enterprise} />
      <CategoryModule category={Category.Hardware_Wallet} posts={homepageModel['Hardware Wallet']} />
      <CategoryModule category={Category.Crypto_Security} posts={homepageModel['Crypto Security']} />
      <CategoryModule category={Category.Partnerships} posts={homepageModel.Partnerships} />
      <CategoryModule category={Category.Bitcoin} posts={homepageModel.Bitcoin} />
      <CategoryModule category={Category.Other} posts={homepageModel.Other} />
    </HomeMain>

  </HomeWrapper>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const POST_COUNT_IN_CATEGORY = 3;
  const heroPosts = await getHeroPosts();
  const categoryPosts = await Promise.all([
    getPostsByCategory(Category.Enterprise, POST_COUNT_IN_CATEGORY),
    getPostsByCategory(Category.Hardware_Wallet, POST_COUNT_IN_CATEGORY),
    getPostsByCategory(Category.Crypto_Security, POST_COUNT_IN_CATEGORY),
    getPostsByCategory(Category.Partnerships, POST_COUNT_IN_CATEGORY),
    getPostsByCategory(Category.Bitcoin, POST_COUNT_IN_CATEGORY),
    getPostsByCategory(Category.Other, POST_COUNT_IN_CATEGORY),
  ]);
  
  return {
    props: { 
      homepage:{      
        heroPost: heroPosts.hero_post.data,
        subHeroFirst: heroPosts.sub_hero_first.data,
        subHeroSecond: heroPosts.sub_hero_second.data,
        [Category.Enterprise]: categoryPosts[0],
        [Category.Hardware_Wallet]: categoryPosts[1],
        [Category.Crypto_Security]: categoryPosts[2],
        [Category.Partnerships]: categoryPosts[3],
        [Category.Bitcoin]: categoryPosts[4],
        [Category.Other]: categoryPosts[5],}
    },
    revalidate: 1,
  };
};

export default Home;
