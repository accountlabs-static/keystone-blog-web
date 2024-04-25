import React, { useCallback, useEffect, useState } from 'react'
import { Category } from '@/constants/categories'
import { CateGoryActivedType, PostModel } from '@/types/homePageType'
import { Post } from '@/types/postDetailPageType'
import { CategoryName, PostItem, Posts } from './Other.style'
import Button from '@/components/Button'
import { getPostsByCategory } from '@/utils/api'
import { postConverter } from '@/pages/[post]/utils'

interface Props {
  category: CateGoryActivedType
  posts: Post[]
}

export function OtherCategories({ category, posts }: Props) {
  const [list, setList] = useState(posts)
  const [isHasNew, setIsHasNew] = useState(true)

  useEffect(() => {
    setList(posts)
    setIsHasNew(true)
  }, [posts])

  const loadMore = useCallback(async () => {
    const newList = (
      await getPostsByCategory(category as Category, 5, list.length)
    )
      .map((it) => postConverter(it.attributes))
      .map((it) => ({ ...it, slug: `/${it.slug}` }))
    setList((list) => list.concat(newList))
    setIsHasNew(newList.length >= 5)
  }, [list, category])

  if (!(category in Category)) return <span>not found category</span>

  return (
    <>
      <CategoryName>{category}</CategoryName>
      <Posts>
        {list.map((it) => (
          <PostItem post={it as unknown as PostModel} key={it.slug} />
        ))}
        {isHasNew && <Button onClick={() => loadMore()}>Load More</Button>}
      </Posts>
    </>
  )
}
