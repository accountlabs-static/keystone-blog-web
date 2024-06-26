import React, { FC, useState } from 'react'
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
  Share,
  Title,
  TopBanner,
} from './index.style'
import { fetchAPI } from '@/utils/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import readingTime from 'reading-time'
import vector from '@/../public/vector.svg'
import Image from 'next/image'
import { marked } from 'marked'
import MainSiteModule from '@/components/MainSiteModule'
import markedAlert from 'marked-alert'
import { postConverter } from './utils'
import { Post } from '@/types/postDetailPageType'
import { CATEGORY_COLOR_MAPPER } from '@/constants/categories'
import Error from 'next/error'
import Popover from '@/components/Popover'
import Media from '@/components/Media'
import Head from 'next/head'
import { BLOG_HOME_PAGE } from '@/constants/links'
import Notification from '@/components/Notification'

interface PostProps {
  post?: Post
  errorCode?: number
}

const PostDetail: FC<PostProps> = ({ post, errorCode }) => {
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [message, setMessage] = useState('');

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const postModel = postConverter(post)
  const minutesToRead = Math.ceil(readingTime(postModel.bodyText).minutes)

  return (
    <>
      <Head>
        <title>{postModel.seo.title}</title>
        <meta name="description" content={postModel.seo.description} />
        <link rel="canonical" href={postModel.seo.canonicalURL} />
        <meta property="og:site_name" content="Keystone's Blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postModel.seo.title} />
        <meta property="og:description" content={postModel.seo.description} />
        <meta property="og:image" content={postModel.heroImage.url} />
        <meta property="og:url" content={postModel.seo.canonicalURL} />
        <meta property="og:image" content={postModel.heroImage.url} />
        <meta property="og:url" content={postModel.seo.canonicalURL} />
      </Head>

      <PostContainer>
        <TopBanner>
          <PostInfo>
            <Category
              color={CATEGORY_COLOR_MAPPER[post.category].fontColorInDarkBg}
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
              <img src="/left-arrow.svg" className="default" alt="" loading="lazy" />
              <img src="/left-arrow-active.svg" className="active" alt="" loading="lazy" />
            </picture>
            <span>Blog Home</span>
          </BackToHome>
          <Popover
            placement="topRight"
            transition="slide bottom-10"
            content={<Media url={`${BLOG_HOME_PAGE}/${post.slug}`} setIsShowNotification={() => setIsShowNotification(true)} setMessage={setMessage} />}
          >
            <Share>
              <span>Share</span>
              <picture>
                <img src="/share.svg" className="default" alt="" loading="lazy" />
                <img src="/share-active.svg" className="active" alt="" loading="lazy" />
              </picture>
            </Share>
          </Popover>
          {isShowNotification && <Notification onClose={() => setIsShowNotification(false)} message={message} type='success' />}
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
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesRes = await fetchAPI('/posts', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        post: `${article.attributes.slug}`,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const articlesRes = await fetchAPI('/posts', {
    filters: {
      slug: params.post,
    },
    populate: {
      hero_image: {
        fields: ['name', 'url'],
      },
    },
  })

  if (!articlesRes.data[0]) {
    return {
      props: { errorCode: 404 },
      revalidate: 1,
    }
  }
  return {
    props: { post: articlesRes.data[0].attributes },
    revalidate: 1,
  }
}

export default PostDetail
