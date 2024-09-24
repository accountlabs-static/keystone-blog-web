import { CategoryModuleWrapper, CategoryName, Posts } from './index.style'
import React, { FC } from 'react'
import CategoryCard from '../CategoryCard'
import { postConverter } from '@/app/[post]/utils'
import { Post } from '@/types/postDetailPageType'

interface CategoryModuleProps {
  category: string
  posts: Post[]
}
const CategoryModule: FC<CategoryModuleProps> = ({ category, posts }) => {
  if (posts.length === 0) return null
  return (
    <CategoryModuleWrapper>
      <CategoryName>{category}</CategoryName>
      <Posts>
        {posts.map((post) => (
          <CategoryCard post={postConverter(post) as any} key={post.slug} />
        ))}
      </Posts>
    </CategoryModuleWrapper>
  )
}

export default CategoryModule
