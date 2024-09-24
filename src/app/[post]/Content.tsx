'use client'

import React from 'react'
import {
  BackToHome,
  BackToHomeAndShare,
  BodyText,
  Category,
  PostContainer,
  PostInfo,
  PublishTime,
  PublishTimeAndReadingTime,
  ReadingTime,
  Title,
  TopBanner,
} from './index.style'
import vector from '@/../public/vector.svg'
import Image from 'next/image'
import { marked } from 'marked'
import MainSiteModule from '@/components/MainSiteModule'
import markedAlert from 'marked-alert'
import { CATEGORY_COLOR_MAPPER } from '@/constants/categories'
import ShareMedia from './ShareMedia'

export default function Content({ article, postModel, minutesToRead }: any) {
  return (
    <PostContainer>
      <TopBanner>
        <PostInfo>
          <Category
            color={
              CATEGORY_COLOR_MAPPER[article.attributes.category]
                ?.fontColorInDarkBg
            }
          >
            {postModel.category}
          </Category>
          <Title>{postModel.title}</Title>
          <PublishTimeAndReadingTime>
            <PublishTime>{postModel.publishTime}</PublishTime>
            <Image src={vector} alt="divider" width={2} height={18} />
            <ReadingTime>{minutesToRead} mins read</ReadingTime>
          </PublishTimeAndReadingTime>
        </PostInfo>
        <picture>
          <img
            src={postModel.heroImage.url}
            alt={postModel.heroImage.alt}
            width="600"
            height="334"
          />
        </picture>
      </TopBanner>
      <BackToHomeAndShare>
        <BackToHome href="/">
          <picture>
            <img
              src="/left-arrow.svg"
              className="default"
              alt=""
              loading="lazy"
            />
            <img
              src="/left-arrow-active.svg"
              className="active"
              alt=""
              loading="lazy"
            />
          </picture>
          <span>Blog Home</span>
        </BackToHome>
        <ShareMedia post={article} />
      </BackToHomeAndShare>
      <BodyText>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.use(markedAlert()).parse(postModel.bodyText),
          }}
        />
      </BodyText>
      <MainSiteModule />
    </PostContainer>
  )
}
