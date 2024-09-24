import { HomepageModule } from '@/types/homePageType'
import { Post } from '@/types/homePageType'
import { Homepage } from '@/types/homePageType'
import { PostModel } from '@/types/homePageType'
import { getPublishTime } from '@/app/[post]/utils'

const convertPostToPostModel = (post: Post): PostModel => {
  if (!post?.attributes) return null
  return {
    slug: post.attributes.slug,
    title: post.attributes.title,
    category: post.attributes.category,
    publishTime: getPublishTime(post.attributes.publishedAt),
    heroImage: {
      name: post.attributes.hero_image.data.attributes.name,
      url: post.attributes.hero_image.data.attributes.url,
    },
  }
}
export const homepageConverter = (homepage: Homepage): HomepageModule => {
  return {
    description: homepage.description,
    heroPost: convertPostToPostModel(homepage.heroPost),
    subHeroFirst: convertPostToPostModel(homepage.subHeroFirst),
    subHeroSecond: convertPostToPostModel(homepage.subHeroSecond),
    latests: homepage.latests.map((post) => convertPostToPostModel(post)),
  }
}
