import React from 'react';
import HeroModule from '@/components/HeroModule';
import CategoryModule from '@/components/CategoryModule';
import { Homepage } from '@/types/homePageType';
import { Category } from '@/constants/categories';
import { homepageConverter } from '../Layout/utils';

export function AllCategories({ homepage }: { homepage: Homepage }) {
  const homepageModel = homepageConverter(homepage);
  return (
    <>
      <HeroModule
        heroPost={homepageModel.heroPost}
        subHeroFirst={homepageModel.subHeroFirst}
        subHeroSecond={homepageModel.subHeroSecond}
      />
      <CategoryModule
        category={Category.HardwareWallet}
        posts={homepageModel['Hardware Wallet']}
      />
      <CategoryModule
        category={Category.CryptoSecurity}
        posts={homepageModel['Crypto Security']}
      />
      <CategoryModule
        category={Category.Bitcoin}
        posts={homepageModel.Bitcoin}
      />
      <CategoryModule
        category={Category.Partnerships}
        posts={homepageModel.Partnerships}
      />
      <CategoryModule
        category={Category.Enterprise}
        posts={homepageModel.Enterprise}
      />
      <CategoryModule category={Category.Other} posts={homepageModel.Other} />
    </>
  );
}
