'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Category } from '@/constants/categories'
import { CategoryActivedType, PostModel } from '@/types/homePageType'
import { Post } from '@/types/postDetailPageType'
import { CategoryName, PostItem, Posts } from './Other.style'
import Button from '@/components/Button'
import { getPostsByCategory } from '@/utils/api'
import useSWRInfinite from 'swr/infinite'
import { postConverter } from '@/app/[post]/utils'
import { slugToTitle } from '@/utils/helpers'
import Loading from '../Loading'

interface Props {
  category: CategoryActivedType
  title: string
  posts: Post[]
  pagination?: Record<string, number>
}

const POST_COUNT = 16

const getKey = (
  size: number,
  previousPageData: Post[],
  category: CategoryActivedType
) => {
  if (previousPageData && !previousPageData.length) return null
  return [category, size === 0 ? 0 : size * POST_COUNT] as [
    CategoryActivedType,
    number,
  ]
}

export function OtherCategories({ category, title, posts, pagination }: Props) {
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showList, setShowList] = useState<any[]>([])

  const {
    data: list,
    size,
    setSize,
  } = useSWRInfinite(
    (size, previousPageData) => getKey(size, previousPageData, category),
    ([category, index]) => getPostsByCategory(
      slugToTitle(category as string) as Category,
      POST_COUNT,
      index
    ).then((res) => res.data),
    {
      revalidateOnFocus: false,
      fallbackData: [posts],
    }
  )

  useEffect(() => {
    const { total } = pagination
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
        const { total } = pagination
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
      <CategoryName>{title}</CategoryName>
      <Posts>
        {showList.flat().map((it) => (
          <PostItem
            post={postConverter(it.attributes) as unknown as PostModel}
            key={it.attributes.slug}
          />
        ))}
        {loading ?
          <Loading
            width='126px'
            height='10px'
          /> :
          <Button hidden={!hasMore} onClick={() => loadMore()}>Load More</Button>}
      </Posts>
    </>
  )
}
