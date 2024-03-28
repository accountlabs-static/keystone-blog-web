import { CategoryModuleWrapper, CategoryName, Posts } from './index.style';
import React, { FC }  from 'react';
import { PostModel } from '../../pages/utils';
import { Category } from '../../constants/categories';
import CategoryCard from '../CategoryCard';

interface CategoryModuleProps {
  category: Category;
  posts: PostModel[];
}
const CategoryModule: FC<CategoryModuleProps> = ({category, posts}) => {
  if(posts.length === 0) return null;
  return <CategoryModuleWrapper>
    <CategoryName>
      {category}
    </CategoryName>
    <Posts>
      {posts.map(post => (
        <CategoryCard post={post} key={post.slug}/>
      ))}
    </Posts>
  </CategoryModuleWrapper>
}

export default CategoryModule;