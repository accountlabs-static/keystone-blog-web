'use client'

import React, { useCallback, useState } from 'react'
import HeroModule from '@/components/HeroModule'
import CategoryModule from '@/components/CategoryModule'
import { Homepage } from '@/types/homePageType'
import { homepageConverter } from '../Layout/utils'
import { getPostsLatests } from '@/utils/api'
import Button from '../Button'
import { FooterLoadMore } from './All.style'
import useSWRInfinite from 'swr/infinite'

const POST_COUNT = 9

const getKey = (size: number, previousPageData: []) => {
  if (previousPageData && !previousPageData.length) return null
  return [size === 0 ? 0 : size * POST_COUNT]
}

export function AllCategories({ homepage }: { homepage: Homepage }) {
  const homepageModel = homepageConverter(homepage)
  const [isHasNew, setIsHasNew] = useState(true)

  const {
    data: list,
    size,
    setSize,
  } = useSWRInfinite(getKey, ([index]) => getPostsLatests(POST_COUNT, index), {
    revalidateOnFocus: false,
    fallbackData: [homepage.latests],
  })

  const loadMore = useCallback(async () => {
    const newList = await setSize(size + 1)
    setIsHasNew(newList.length >= POST_COUNT)
  }, [size, setSize])

  return (
    <>
      <HeroModule
        heroPost={homepageModel.heroPost}
        subHeroFirst={homepageModel.subHeroFirst}
        subHeroSecond={homepageModel.subHeroSecond}
      />
      <CategoryModule
        category={'Latest articles'}
        posts={list?.flat()?.map((it) => it.attributes)}
      />
      <FooterLoadMore>
        {isHasNew && <Button onClick={() => loadMore()}>Load More</Button>}
      </FooterLoadMore>
    </>
  )
}
