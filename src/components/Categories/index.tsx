import { CategoriesWrapper, CategoryLable } from './index.style'
import React from 'react'
import { Category } from '@/constants/categories'
import { slugify } from '@/utils/helpers'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Categories: React.FC = () => {
  const params = useParams()

  return (
    <CategoriesWrapper>
      <Link href="/" key="home">
        <CategoryLable $actived={!params?.category}>Home</CategoryLable>
      </Link>
      {Object.entries(Category).map(([_key, value]) => (
        <Link href={`/categories/${slugify(value)}`} key={value}>
          <CategoryLable
            $actived={params?.category === slugify(value)}
            key={value}
          >
            {value}
          </CategoryLable>
        </Link>
      ))}
      ,
    </CategoriesWrapper>
  )
}

export default Categories
