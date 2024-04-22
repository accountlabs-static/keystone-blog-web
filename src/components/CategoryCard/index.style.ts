import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: var(--banner-bg-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  min-height: 108px;
  @media ${DEVICE_QUERY_MOBILE} {
    min-height: auto;
    font-size: 18px;
    line-height: 28px;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

export const CategoryCardWrapper = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 40px;
  align-items: flex-start;
  &:hover {
    ${Title} {
      color: var(--link-color);
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    gap: 24px;
    width: 100%;
    img {
      width: 100%;
      height: 190px;
    }
  }
`;

export const PostInfo = styled.div`
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
  }
`;

export const PublishTime = styled.div`
  font-family: var(--font-open-sans);
  color: var(--publish-time-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
