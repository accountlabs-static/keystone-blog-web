import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getHeroPosts, getPostsByCategory } from '@/utils/api';
import { Category } from '@/constants/categories';
import { CateGoryActivedType } from '@/types/homePageType';
import HomeLayout from '@/components/Layout/home';
import { useRouter } from 'next/router';
import { OtherCategories } from '@/components/HomeCategories/Other';
import { slugToUpperCase, slugToUpperCaseRecoverEnum } from '@/utils/helpers';
import { Post } from '@/types/postDetailPageType';
import { postConverter } from '../[post]/utils';

interface CategoriesPageProps {
  homeDescription: string;
  posts: Post[];
}

const CategoryPage: FC<CategoriesPageProps> = ({ homeDescription, posts }) => {
  const router = useRouter();
  const category =
    router.query?.category &&
    (slugToUpperCase(router.query.category as string) as CateGoryActivedType);
  return (
    <HomeLayout description={homeDescription}>
      <OtherCategories category={category} posts={posts} />
    </HomeLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(Category).map((category) => ({
      params: {
        category,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async ({
  params,
}) => {
  const POST_COUNT_IN_CATEGORY = 5;
  const category = slugToUpperCaseRecoverEnum(
    params.category as string
  ) as Category;
  const heroPosts = await getHeroPosts();
  const posts = (await getPostsByCategory(category, POST_COUNT_IN_CATEGORY))
    .map((it) => postConverter(it.attributes))
    .map((it) => ({ ...it, slug: `/${it.slug}` }));
  try {
    return {
      props: {
        homeDescription: heroPosts.description,
        posts,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      props: {
        homeDescription: '',
        posts: [],
      },
      revalidate: 1,
    };
  }
};

export default CategoryPage;
