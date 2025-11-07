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
  const [showList, setShowList] = useState<any[]>([])

  const {
    data: list,
    size,
    setSize,
  } = useSWRInfinite(getKey, ([index]) => getPostsLatests(POST_COUNT, index).then((res) => res.data), {
    revalidateOnFocus: false,
    fallbackData: [homepage.latests],
  })


  useEffect(() => {
    const { total } = homepage.pagination
    const result = [...list].splice(0, showList.length + 1)
    const currentTotal = result.reduce((acc, it) => acc + it.length, 0)
    setShowList(result)
    setHasMore(total > currentTotal)
    setLoading(false)
  }, [list.length])

  const loadMore = useCallback(async () => {
    const hasCache = list.length > showList.length
    setLoading(true)
    if (hasCache) {
      setTimeout(() => {
        const { total } = homepage.pagination
        const result = [...showList, list[showList.length]]
        const currentTotal = result.reduce((acc, it) => acc + it.length, 0)
        setShowList(result)
        setHasMore(total > currentTotal)
        setLoading(false)
      }, 0)
    } else {
      await setSize(size + 1)
    }
  }, [list.length, showList, size, setSize])

  return (
    <>
      <HeroModule
        heroPost={homepageModel.heroPost}
        subHeroFirst={homepageModel.subHeroFirst}
        subHeroSecond={homepageModel.subHeroSecond}
      />
      <CategoryModule
        category={'Latest articles'}
        posts={showList?.flat()?.map((it) => it.attributes)}
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
