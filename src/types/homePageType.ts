import { Category } from '../constants/categories';

const {
  Hardware_Wallet,
  Crypto_Security,
  Bitcoin,
  Partnerships,
  Enterprise,
  Other,
} = Category;

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
  description: string;
  heroPost: Post;
  subHeroFirst: Post;
  subHeroSecond: Post;
  [Category.Hardware_Wallet]: Post[];
  [Category.Crypto_Security]: Post[];
  [Category.Bitcoin]: Post[];
  [Category.Partnerships]: Post[];
  [Category.Enterprise]: Post[];
  [Category.Other]: Post[];
}

export interface HomepageModule {
  description: string;
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

export interface Post {
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
    published_time: string
  };
}
