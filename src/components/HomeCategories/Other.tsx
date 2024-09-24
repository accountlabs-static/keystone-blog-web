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
  const [isHasNew, setIsHasNew] = useState(true)

  const {
    data: list,
    size,
    setSize,
  } = useSWRInfinite(
    (size, previousPageData) => getKey(size, previousPageData, category),
    ([category, index]) =>
      getPostsByCategory(
        slugToTitle(category as string) as Category,
        POST_COUNT,
        index
      ),
    {
      revalidateOnFocus: false,
      fallbackData: [posts],
    }
  )

  const loadMore = useCallback(async () => {
    const newList = await setSize(size + 1)
    setIsHasNew(newList.length >= POST_COUNT)
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
        {isHasNew && <Button onClick={() => loadMore()}>Load More</Button>}
      </Posts>
    </>
  )
}
