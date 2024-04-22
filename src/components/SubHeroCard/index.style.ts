import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

interface CategoryProps {
  $bgColor: string;
  $fontColor: string;
}
export const Category = styled.span<CategoryProps>`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 2px 8px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  border-radius: 4px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: var(--banner-bg-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const SubHeroCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 600px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 24px;
  &:hover {
    ${Title} {
      color: var(--link-color);
    }
  }
  img {
    object-fit: cover;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
    img {
      width: 100%;
      height: 190px;
    }
  }
`;

export const PostInfo = styled.div`
  width: 100%;
`;

export const PublishTime = styled.span`
  color: var(--publish-time-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  @media ${DEVICE_QUERY_MOBILE} {
   font-size: 12px;
   line-height: 18px;
  }
`;

export const CategoryAndPublishTime = styled.div`
  font-family: var(--font-open-sans);
  display: flex;
  justify-content: space-between;
`;
