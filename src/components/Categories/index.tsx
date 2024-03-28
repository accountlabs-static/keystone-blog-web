import { CategoriesWrapper, CategoryLable } from './index.style';
import React, { FC } from 'react';
import { Category } from '../../constants/categories';


const Categories: FC = () => {

  const renderCategoryLable = () => {
    const labels = [<CategoryLable key='home'>Home</CategoryLable>];
    for (const value of Object.values(Category)) {
      labels.push(
        <CategoryLable key={value}>{value}</CategoryLable>
      )
    }
    return labels;
  }
  return <CategoriesWrapper>
    {renderCategoryLable()}
  </CategoriesWrapper>
}

export default Categories;