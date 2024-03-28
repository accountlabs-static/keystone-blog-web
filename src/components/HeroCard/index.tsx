import React, { FC }  from 'react';
import Image from 'next/image';
import { Category, CategoryAndPublishTime, HeroCardWrapper, PostInfo, PublishTime, Title } from './index.style';
import { PostModel } from '../../pages/uils';
import { CATEGORY_COLOR_MAPPER } from '../../constants/categories';


interface HeroCardProps {
  post: PostModel
}
const HeroCard: FC<HeroCardProps> = ({post}) => {
  if(!post) return null;
  return <HeroCardWrapper href={`/posts/${post.slug}`}>
    <Image src={post.heroImage.url} alt={post.heroImage.name} width={720} height={400}/>
    <PostInfo>
      <CategoryAndPublishTime>
        <Category fontColor={CATEGORY_COLOR_MAPPER[post.category].fontColor} bgColor={CATEGORY_COLOR_MAPPER[post.category].bgColor} >
          {post.category}
        </Category>
        <PublishTime>
          {post.publishTime}
        </PublishTime>
      </CategoryAndPublishTime>
      <Title>
        {post.title}
      </Title>
    </PostInfo>
  </HeroCardWrapper>
}

export default HeroCard;