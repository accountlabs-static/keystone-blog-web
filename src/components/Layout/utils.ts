import { Category } from '@/constants/categories';
import { HomepageModule } from '@/types/homePageType';
import { Post } from '@/types/homePageType';
import { Homepage } from '@/types/homePageType';
import { PostModel } from '@/types/homePageType';
import { getPublishTime } from '@/pages/[post]/utils';

const convertPostToPostModel = (post: Post): PostModel => {
  if (!post?.attributes) return null;
  return {
    slug: post.attributes.slug,
    title: post.attributes.title,
    category: post.attributes.category,
    publishTime: getPublishTime(
      post.attributes.published_time ?? post.attributes.publishedAt
    ),
    heroImage: {
      name: post.attributes.hero_image.data.attributes.name,
      url: post.attributes.hero_image.data.attributes.url,
    },
  };
};
export const homepageConverter = (homepage: Homepage): HomepageModule => {
  return {
    description: homepage.description,
    heroPost: convertPostToPostModel(homepage.heroPost),
    subHeroFirst: convertPostToPostModel(homepage.subHeroFirst),
    subHeroSecond: convertPostToPostModel(homepage.subHeroSecond),
    [Category.HardwareWallet]: homepage[Category.HardwareWallet].map((post) => {
      return convertPostToPostModel(post);
    }),
    [Category.CryptoSecurity]: homepage[Category.CryptoSecurity].map((post) => {
      return convertPostToPostModel(post);
    }),
    [Category.Bitcoin]: homepage[Category.Bitcoin].map((post) => {
      return convertPostToPostModel(post);
    }),
    [Category.Partnerships]: homepage[Category.Partnerships].map((post) => {
      return convertPostToPostModel(post);
    }),
    [Category.Enterprise]: homepage[Category.Enterprise].map((post) => {
      return convertPostToPostModel(post);
    }),
    [Category.Other]: homepage[Category.Other].map((post) => {
      return convertPostToPostModel(post);
    }),
  };
};
