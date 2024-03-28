import { Category } from '../constants/categories';
import { getPublishTime } from './posts/utils';

const {
  Hardware_Wallet,
  Crypto_Security,
  Bitcoin,
  Partnerships,
  Enterprise,
  Other,
} = Category;

interface Post {
    id: number;
    attributes: {
      body_text: string;
      title: string;
      category: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      slug: string;
      hero_image: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
    };
}

export interface PostModel {
  slug: string;
  title: string;
  category: string;
  publishTime: string;
  heroImage: {
    name: string;
    url: string;
  };
}

export interface Homepage { 
  heroPost: Post,
  subHeroFirst: Post,
  subHeroSecond: Post,
  [Category.Hardware_Wallet]: Post[],
  [Category.Crypto_Security]: Post[],
  [Category.Bitcoin]: Post[],
  [Category.Partnerships]: Post[],
  [Category.Enterprise]: Post[],
  [Category.Other]: Post[],
}

export interface HomepageModule {
  heroPost: PostModel;
  subHeroFirst: PostModel;
  subHeroSecond: PostModel;
  [Hardware_Wallet]: PostModel[];
  [Crypto_Security]: PostModel[];
  [Bitcoin]: PostModel[];
  [Partnerships]: PostModel[];
  [Enterprise]: PostModel[];
  [Other]: PostModel[];
}

const convertPostToPostModel = (post: Post): PostModel => {
  if(!post?.attributes) return null;
  return {
    slug: post.attributes.slug,
    title: post.attributes.title,
    category: post.attributes.category,
    publishTime: getPublishTime(post.attributes.publishedAt),
    heroImage: {
      name: post.attributes.hero_image.data.attributes.name,
      url: post.attributes.hero_image.data.attributes.url,
    }
  }
}
export const homepageConverter = (homepage: Homepage): HomepageModule => {
  return {    
    heroPost: convertPostToPostModel(homepage.heroPost),
    subHeroFirst: convertPostToPostModel(homepage.subHeroFirst),
    subHeroSecond: convertPostToPostModel(homepage.subHeroSecond),
    [Hardware_Wallet]: homepage[Hardware_Wallet].map(post => {return convertPostToPostModel(post)}),
    [Crypto_Security]: homepage[Crypto_Security].map(post => {return convertPostToPostModel(post)}),
    [Bitcoin]: homepage[Bitcoin].map(post => {return convertPostToPostModel(post)}),
    [Partnerships]: homepage[Partnerships].map(post => {return convertPostToPostModel(post)}),
    [Enterprise]: homepage[Enterprise].map(post => {return convertPostToPostModel(post)}),
    [Other]: homepage[Other].map(post => {return convertPostToPostModel(post)}),
  }
};