export interface PostModel {
  bodyText: string;
  title: string;
  category: string;
  publishedAt: string;
  locale: string;
  slug: string;
  heroImage: {
    url: string;
    alt: string;
  };
}

interface HeroImage {
  data: {
    id: string;
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface Post {
  body_text: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  hero_image: HeroImage;
}

export const postConverter = (post: Post): PostModel => {
  return {
    bodyText: post.body_text,
    title: post.title,
    category: post.category,
    publishedAt: post.publishedAt,
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
