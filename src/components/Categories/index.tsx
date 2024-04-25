import { CategoriesWrapper, CategoryLable } from './index.style';
import React, { useCallback, useEffect, useState } from 'react';
import { Category } from '@/constants/categories';
import { useRouter } from 'next/router';
import { CateGoryActivedType } from '@/types/homePageType';
import { slugify } from '@/utils/helpers';
import Link from 'next/link';

const Categories: React.FC = () => {
  const router = useRouter();
  const [actived, setActived] = useState<CateGoryActivedType>();
  const category = router.query?.category as CateGoryActivedType;

  const changeCategory = useCallback((category: CateGoryActivedType) => {
    setActived(slugify(category));
  }, []);

  useEffect(() => {
    if (category) {
      setActived(slugify(category));
    } else {
      setActived('All');
    }
  }, [category]);

  const renderCategoryLable = () => {
    const labels = [
      <Link href="/" key="home">
        <CategoryLable
          $actived={actived === 'All'}
          onClick={() => changeCategory('All')}
        >
          Home
        </CategoryLable>
      </Link>,
    ];
    for (const [_key, value] of Object.entries(Category)) {
      labels.push(
        <Link href={`/categories/${slugify(value)}`}>
          <CategoryLable
            $actived={actived === slugify(value)}
            key={value}
            onClick={() => changeCategory(value)}
          >
            {value}
          </CategoryLable>
        </Link>
      );
    }
    return labels;
  };
  return <CategoriesWrapper>{renderCategoryLable()}</CategoriesWrapper>;
};

export default Categories;
