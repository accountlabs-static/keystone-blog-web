import React, { useCallback, useEffect, useState } from 'react'
import HeroModule from '@/components/HeroModule'
import CategoryModule from '@/components/CategoryModule'
import { Homepage } from '@/types/homePageType'
import { homepageConverter } from '../Layout/utils'
import { getPostsLatests } from '@/utils/api'
import { postConverter } from '@/pages/[post]/utils'
import Button from '../Button'
import { FooterLoadMore } from './All.style'

const POST_COUNT = 9

export function AllCategories({ homepage }: { homepage: Homepage }) {
  const homepageModel = homepageConverter(homepage)

  const [list, setList] = useState(homepageModel.latests)
  const [isHasNew, setIsHasNew] = useState(true)

  const loadMore = useCallback(async () => {
    const newList = (await getPostsLatests(POST_COUNT, list.length)).map(
      (it) => {
        const data = postConverter(it.attributes)
        return {
          ...data,
          slut: data.slug,
        }
      }
    )
    setList((data) => data.concat(newList))
    setIsHasNew(newList.length >= POST_COUNT)
  }, [list.length])

  return (
    <>
      <HeroModule
        heroPost={homepageModel.heroPost}
        subHeroFirst={homepageModel.subHeroFirst}
        subHeroSecond={homepageModel.subHeroSecond}
      />
      <CategoryModule category={'Latest articles'} posts={list} />
      <FooterLoadMore>
        {isHasNew && <Button onClick={() => loadMore()}>Load More</Button>}
      </FooterLoadMore>
    </>
  )
}
