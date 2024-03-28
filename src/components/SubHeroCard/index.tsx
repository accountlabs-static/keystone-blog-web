import { Category, CategoryAndPublishTime, SubHeroCardWrapper, PostInfo, PublishTime, Title } from './index.style';
import React, { FC }  from 'react';
import { PostModel } from '../../pages/utils';
import Image from 'next/image';
import { CATEGORY_COLOR_MAPPER } from '../../constants/categories';

interface SubHeroCardProps {
  post: PostModel
}
const SubHeroCard: FC<SubHeroCardProps> = ({post}) => {
  return <SubHeroCardWrapper href={`/posts/${post.slug}`}>
    <Image src={'/keystone3.png'} alt={post.heroImage.name} width={600} height={334}/>
    {/* <Image src={post.heroImage.url} alt={post.heroImage.name} width={600} height={334}/> */}
    <PostInfo>
      <CategoryAndPublishTime>
        <Category fontColor={CATEGORY_COLOR_MAPPER[post.category].fontColor} bgColor={CATEGORY_COLOR_MAPPER[post.category].bgColor}>
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
  </SubHeroCardWrapper>
}

export default SubHeroCard;