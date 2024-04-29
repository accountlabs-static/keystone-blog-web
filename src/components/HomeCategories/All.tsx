import React from 'react'
import HeroModule from '@/components/HeroModule'
import CategoryModule from '@/components/CategoryModule'
import { Homepage } from '@/types/homePageType'
import { homepageConverter } from '../Layout/utils'

export function AllCategories({ homepage }: { homepage: Homepage }) {
  const homepageModel = homepageConverter(homepage)
  return (
    <>
      <HeroModule
        heroPost={homepageModel.heroPost}
        subHeroFirst={homepageModel.subHeroFirst}
        subHeroSecond={homepageModel.subHeroSecond}
      />
      <CategoryModule
        category={'Latest articles'}
        posts={homepageModel.latests}
      />
    </>
  )
}
