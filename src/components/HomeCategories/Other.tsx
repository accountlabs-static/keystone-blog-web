'use client'

import React, { useCallback, useState } from 'react'
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
}

const POST_COUNT = 5

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

export function OtherCategories({ category, title, posts }: Props) {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const {
    data: list,
    size,
    setSize,
  } = useSWRInfinite(
    (size, previousPageData) => getKey(size, previousPageData, category),
    ([category, index]) => {
      setLoading(true)
      return getPostsByCategory(
        slugToTitle(category as string) as Category,
        POST_COUNT,
        index
      ).then(({ data, meta }) => {
        const { total, start } = meta.pagination
        const currentTotal = start + data.length
        setHasMore(total > currentTotal)
        return data
      }).finally(() => {
        setLoading(false)
      })
    },
    {
      revalidateOnFocus: false,
      fallbackData: [posts],
    }
  )

  const loadMore = useCallback(async () => {
    setSize(size + 1)
  }, [size, setSize])

  return (
    <>
      <CategoryName>{title}</CategoryName>
      <Posts>
        {list.flat().map((it) => (
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
