import { PostModel } from '../../types/postDetailPageType';
import { Post } from '../../types/postDetailPageType';
import { BLOG_HOME_PAGE } from '../../constants/links';

export const postConverter = (post: Post): PostModel => {
  return {
    bodyText: post.body_text,
    title: post.title,
    category: post.category,
    publishTime: getPublishTime(post.published_time ?? post.publishedAt),
    locale: post.locale,
    slug: post.slug,
    heroImage: {
      url: post.hero_image.data.attributes.url,
      alt: post.hero_image.data.attributes.name,
    },
    seo: {
      title: post.seo?.metaTitle || `${post.title} | Keystone Hardware Wallet`,
      description: post.seo?.metaDescription || post.title,
      canonicalURL: post.seo?.canonicalURL || `${BLOG_HOME_PAGE}/${post.slug}`,
    }
  };
};

export const getPublishTime = (publishAt: string) => {
  const date = new Date(publishAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  return formattedDate;
};
