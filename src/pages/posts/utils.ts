import { PostModel } from '../../types/postDetailPageType';
import { Post } from '../../types/postDetailPageType';

export const postConverter = (post: Post): PostModel => {
  return {
    bodyText: post.body_text,
    title: post.title,
    category: post.category,
    publishTime: getPublishTime(post.publishedAt),
    locale: post.locale,
    slug: post.slug,
    heroImage: {
      url: post.hero_image.data.attributes.url,
      alt: post.hero_image.data.attributes.name,
    },
  };
};

export const getPublishTime = (publishAt: string) => {
  const date = new Date(publishAt);
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  return formattedDate;
}
