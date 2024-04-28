import {
  CategoryCardWrapper,
  PostInfo,
  PublishTime,
  Title,
} from './index.style'
import React, { FC } from 'react'
import { PostModel } from '../../types/homePageType'
import Image from 'next/image'
import { Category } from '../SubHeroCard/index.style'
import { CATEGORY_COLOR_MAPPER } from '@/constants/categories'

interface CategoryCardProps {
  post: PostModel
  className?: string
}
const CategoryCard: FC<CategoryCardProps> = ({ post, className }) => {
  if (!post) return null
  return (
    <CategoryCardWrapper href={post.slug} className={className}>
      {post.heroImage && (
        <Image
          src={post.heroImage.url}
          alt={post.heroImage.name}
          width={400}
          height={220}
        />
      )}
      <PostInfo>
        <Category
          $fontColor={CATEGORY_COLOR_MAPPER[post.category].fontColor}
          $bgColor={CATEGORY_COLOR_MAPPER[post.category].bgColor}
        >
          {post.category}
        </Category>
        <Title>{post.title}</Title>
        <PublishTime>{post.publishTime}</PublishTime>
      </PostInfo>
    </CategoryCardWrapper>
  )
}

export default CategoryCard
