import { Category } from '../constants/categories'

const {
  HardwareWallet,
  CryptoSecurity,
  Bitcoin,
  Partnerships,
  Enterprise,
  Other,
} = Category

export interface PostModel {
  slug: string
  title: string
  category: string
  publishTime: string
  heroImage: {
    name: string
    url: string
  }
}

export interface Homepage {
  description: string
  heroPost: Post
  subHeroFirst: Post
  subHeroSecond: Post
  latests: Post[]
}

export interface HomepageModule {
  description: string
  heroPost: PostModel
  subHeroFirst: PostModel
  subHeroSecond: PostModel
  latests: PostModel[]
}

export interface Post {
  id: number
  attributes: {
    body_text: string
    title: string
    category: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    slug: string
    hero_image: {
      data: {
        id: number
        attributes: {
          name: string
          url: string
        }
      }
    }
    published_at: string
  }
}

export type CategoryActivedType = keyof typeof Category | 'All' | (string & {})
