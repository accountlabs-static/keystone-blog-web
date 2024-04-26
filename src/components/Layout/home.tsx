'use client';
import React, { ReactNode } from 'react';
import {
  Description,
  HomeMain,
  HomeWrapper,
  Title,
  TitleAndDescription,
  TopBanner,
} from './home.style';
import Image from 'next/image';
import Categories from '@/components/Categories';
import { IMAGE_CDN } from '@/constants/links';

interface LayoutProps {
  children: ReactNode;
  description: string;
}

export default function HomeLayout({ children, description }: LayoutProps) {
  return (
    <HomeWrapper>
      <TopBanner>
        <TitleAndDescription>
          <Title>
            Keystone&apos;s <em>Blog</em>
          </Title>
          <Description>{description}</Description>
        </TitleAndDescription>
        <Image
          src={`${IMAGE_CDN}/homepage.png`}
          alt="keystone"
          height={350}
          width={540}
          unoptimized={true}
        />
      </TopBanner>
      <HomeMain>
        <Categories />
        {children}
      </HomeMain>
    </HomeWrapper>
  );
}
