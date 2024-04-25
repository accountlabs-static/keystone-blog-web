import React from 'react';
import { Category } from '@/constants/categories';
import { CateGoryActivedType, PostModel } from '@/types/homePageType';
import { Post } from '@/types/postDetailPageType';
import { CategoryName, PostItem, Posts } from './Other.style';

interface Props {
  category: CateGoryActivedType;
  posts: Post[];
}

export function OtherCategories({ category, posts }: Props) {
  if (!(category in Category)) return <span>not found category</span>;

  return (
    <>
      <CategoryName>{category}</CategoryName>
      <Posts>
        {posts.map((it) => (
          <PostItem post={it as unknown as PostModel} key={it.slug} />
        ))}
      </Posts>
    </>
  );
}
