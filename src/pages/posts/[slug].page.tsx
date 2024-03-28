import React, { FC } from 'react';
import { BodyText, Category, PostContainer, PostInfo, PublishTime, PublishTimeAndReadingTime, ReadingTime, Title, TopBanner } from './index.style';
import { fetchAPI } from '../../utils/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import readingTime from 'reading-time';
import vector from '../../../public/vector.svg';
import Image from 'next/image';
import {marked} from 'marked';
import MainSiteModule from '../../components/MainSiteModule';
import markedAlert from 'marked-alert';
import { Post, postConverter } from './utils';

interface PostProps {
  post: Post
}

const PostDetail: FC<PostProps> = ({ post }) => {

  const postModel = postConverter(post);
  const minutesToRead = Math.ceil(readingTime(postModel.bodyText).minutes);

  return <PostContainer>
    <TopBanner>
      <PostInfo>
        <Category>
          {postModel.category}
        </Category>
        <Title>
          {postModel.title}
        </Title>
        <PublishTimeAndReadingTime>
          <PublishTime>
            {postModel.publishTime}
          </PublishTime>
          <Image src={vector} alt='divider' />
          <ReadingTime>
            {minutesToRead} mins read
          </ReadingTime>
        </PublishTimeAndReadingTime>
      </PostInfo>
      <picture>
        <img src={postModel.heroImage.url} alt={postModel.heroImage.alt} width='600' height='334' />
      </picture>
    </TopBanner>
    <BodyText>
      <div
        dangerouslySetInnerHTML={{__html: marked.use(markedAlert()).parse(postModel.bodyText)}}
      />
    </BodyText>
    <MainSiteModule />
  </PostContainer>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesRes = await fetchAPI('/posts', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const articlesRes = await fetchAPI('/posts', {
    filters: {
      slug: params.slug,
    },
    populate: {
      hero_image: {
        fields: ['name', 'url']
      }
    },
  })

  return {
    props: { post: articlesRes.data[0]?.attributes },
    revalidate: 1,
  }
}

export default PostDetail;