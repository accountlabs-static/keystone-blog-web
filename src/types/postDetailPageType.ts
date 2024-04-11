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

export interface HeroImage {
  data: {
    id: string;
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface PostModel {
  bodyText: string;
  title: string;
  category: string;
  publishTime: string;
  locale: string;
  slug: string;
  heroImage: {
    url: string;
    alt: string;
  };
}

