import React, { FC } from 'react';
import { Description, HomeMain, HomeWrapper, Title, TitleAndDescription, TopBanner } from './index.style';
import { GetStaticProps } from 'next';
import { getHeroPosts, getPostsByCategory } from '../utils/api';
import { Category } from '../constants/categories';
import { homepageConverter } from './utils';
import { Homepage } from '../types/homePageType';
import HeroModule from '../components/HeroModule';
import CategoryModule from '../components/CategoryModule';
import Image from 'next/image';
import Categories from '../components/Categories';
import { IMAGE_CDN } from '../constants/links';

interface HomeProps {
  homepage: Homepage;
}

const Home: FC<HomeProps> = ({homepage}) => {
  const homepageModel = homepageConverter(homepage);
  const description = homepageModel.description;
  return <HomeWrapper>
    <TopBanner>
      <TitleAndDescription>
        <Title>
          Keystone&apos;s <em>Blog</em>
        </Title>
        <Description>
          {description}
        </Description>
      </TitleAndDescription>
      <Image src={`${IMAGE_CDN}/homepage.png`} alt='keystone' height={350} width={540} unoptimized={true}/>
    </TopBanner>
    <HomeMain>
      <Categories />
      <HeroModule heroPost={homepageModel.heroPost} subHeroFirst={homepageModel.subHeroFirst} subHeroSecond={homepageModel.subHeroSecond} />
      <CategoryModule category={Category.Hardware_Wallet} posts={homepageModel['Hardware Wallet']} />
      <CategoryModule category={Category.Crypto_Security} posts={homepageModel['Crypto Security']} />
      <CategoryModule category={Category.Bitcoin} posts={homepageModel.Bitcoin} />
      <CategoryModule category={Category.Partnerships} posts={homepageModel.Partnerships} />
      <CategoryModule category={Category.Enterprise} posts={homepageModel.Enterprise} />
      <CategoryModule category={Category.Other} posts={homepageModel.Other} />
    </HomeMain>

  </HomeWrapper>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const POST_COUNT_IN_CATEGORY = 3;
  const heroPosts = await getHeroPosts();
  try {
    const categoryPosts = await Promise.all([
      getPostsByCategory(Category.Hardware_Wallet, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Crypto_Security, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Bitcoin, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Partnerships, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Enterprise, POST_COUNT_IN_CATEGORY),
      getPostsByCategory(Category.Other, POST_COUNT_IN_CATEGORY),
    ]);
    return {
      props: { 
        homepage:{
          description: heroPosts.description,
          heroPost: heroPosts.hero_post.data,
          subHeroFirst: heroPosts.sub_hero_first.data,
          subHeroSecond: heroPosts.sub_hero_second.data,
          [Category.Hardware_Wallet]: categoryPosts[0],
          [Category.Crypto_Security]: categoryPosts[1],
          [Category.Bitcoin]: categoryPosts[2],
          [Category.Partnerships]: categoryPosts[3],
          [Category.Enterprise]: categoryPosts[4],
          [Category.Other]: categoryPosts[5],}
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      props: { 
        homepage:{
          description: '',
          heroPost: null,
          subHeroFirst: null,
          subHeroSecond: null,
          [Category.Hardware_Wallet]: [],
          [Category.Crypto_Security]: [],
          [Category.Bitcoin]: [],
          [Category.Partnerships]: [],
          [Category.Enterprise]: [],
          [Category.Other]: [],
        }
      },
      revalidate: 1,
    };
  }
};

export default Home;
