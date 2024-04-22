import { CategoryCardWrapper, PostInfo, PublishTime, Title } from './index.style';
import React, { FC } from 'react';
import { PostModel } from '../../types/homePageType';
import Image from 'next/image';

interface CategoryCardProps {
  post: PostModel
}
const CategoryCard: FC<CategoryCardProps> = ({ post }) => {
  if(!post) return null;
  return <CategoryCardWrapper href={post.slug}>
    <Image src={post.heroImage.url} alt={post.heroImage.name} width={400} height={220} />
    <PostInfo>
      <Title>
        {post.title}
      </Title>
      <PublishTime>
        {post.publishTime}
      </PublishTime>
    </PostInfo>
  </CategoryCardWrapper>
}

export default CategoryCard;