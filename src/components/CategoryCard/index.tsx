import { CategoryCardWrapper, PostInfo, PublishTime, Title } from './index.style';
import React, { FC } from 'react';
import { PostModel } from '../../pages/utils';
import Image from 'next/image';

interface CategoryCardProps {
  post: PostModel
}
const CategoryCard: FC<CategoryCardProps> = ({ post }) => {
  return <CategoryCardWrapper href={`/posts/${post.slug}`}>
    {/* <Image src={post.heroImage.url} alt={post.heroImage.name} width={400} height={220} /> */}
    <Image src={'/keystone3.png'} alt={post.heroImage.name} width={400} height={220} />
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