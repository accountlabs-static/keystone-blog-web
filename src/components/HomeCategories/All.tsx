'use client'

import React, { useCallback, useEffect, useState } from 'react'
import HeroModule from '@/components/HeroModule'
import CategoryModule from '@/components/CategoryModule'
import { Homepage } from '@/types/homePageType'
import { homepageConverter } from '../Layout/utils'
import { getPostsLatests } from '@/utils/api'
import Button from '../Button'
import Loading from '../Loading'
import { FooterLoadMore } from './All.style'
import useSWRInfinite from 'swr/infinite'

const POST_COUNT = 24

const getKey = (size: number, previousPageData: []) => {
  if (previousPageData && !previousPageData.length) return null
  return [size === 0 ? 0 : size * POST_COUNT]
}

export function AllCategories({ homepage }: { homepage: Homepage }) {
  const homepageModel = homepageConverter(homepage)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const {
    data: list,
    mutate,
    size,
    setSize,
  } = useSWRInfinite(getKey, ([index]) => {
    setLoading(true)
    return getPostsLatests(POST_COUNT, index).then(({ data, meta }) => {
      const { total, start } = meta.pagination
      const cacheTotal = list.reduce((acc, it) => acc + it.length, 0)
      const currentTotal = Math.max(cacheTotal, start + data.length)
      setHasMore(total > currentTotal)
      return data
    }).finally(() => {
      setLoading(false)
    })
  }, {
    revalidateOnFocus: false,
    fallbackData: [homepage.latests],
  })

  useEffect(() => {
    return () => {
      mutate(undefined, { revalidate: false });
    };
  }, [mutate]);

  const loadMore = useCallback(async () => {
    setSize(size + 1)
  }, [setSize, size])

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
        {loading ?
          <Loading
            width='126px'
            height='10px'
          /> :
          <Button hidden={!hasMore} onClick={() => loadMore()}>Load More</Button>}
      </FooterLoadMore>
    </>
  )
}
