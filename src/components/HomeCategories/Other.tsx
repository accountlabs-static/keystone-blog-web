import React, { useCallback, useEffect, useState } from 'react'
import { Category } from '@/constants/categories'
import { CategoryActivedType, PostModel } from '@/types/homePageType'
import { Post } from '@/types/postDetailPageType'
import { CategoryName, PostItem, Posts } from './Other.style'
import Button from '@/components/Button'
import { getPostsByCategory } from '@/utils/api'
import { postConverter } from '@/pages/[post]/utils'

interface Props {
  category: CategoryActivedType
  title: string
  posts: Post[]
}

export function OtherCategories({ category, title, posts }: Props) {
  const [list, setList] = useState(posts)
  const [isHasNew, setIsHasNew] = useState(true)

  useEffect(() => {
    setList(posts)
    setIsHasNew(posts.length >= 5)
  }, [posts])

  const loadMore = useCallback(async () => {
    const newList = (
      await getPostsByCategory(Category[category] as Category, 5, list.length)
    )
      .map((it) => postConverter(it.attributes))
      .map((it) => ({ ...it, slug: `/${it.slug}` }))
    setList((list) => list.concat(newList))
    setIsHasNew(newList.length >= 5)
  }, [list, category])

  return (
    <>
      <CategoryName>{title}</CategoryName>
      <Posts>
        {list.map((it) => (
          <PostItem post={it as unknown as PostModel} key={it.slug} />
        ))}
        {isHasNew && <Button onClick={() => loadMore()}>Load More</Button>}
      </Posts>
    </>
  )
}
