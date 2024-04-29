export interface Post {
  body_text: string
  title: string
  category: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  slug: string
  hero_image: HeroImage
  published_at: string
  seo?: SEO
}

export interface HeroImage {
  data: {
    id: string
    attributes: {
      name: string
      url: string
    }
  }
}

export interface SEO {
  metaTitle: string
  metaDescription: string
  keywords?: string
  metaRobots?: string
  structuredData?: string
  metaViewport?: string
  canonicalURL?: string
}

export interface PostModel {
  bodyText: string
  title: string
  category: string
  publishTime: string
  locale: string
  slug: string
  heroImage: {
    url: string
    alt: string
  }
  seo: {
    title: string
    description: string
    canonicalURL: string
  }
}
