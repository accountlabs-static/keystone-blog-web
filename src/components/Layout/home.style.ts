import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints';

export const HomeWrapper = styled.div`
  padding-bottom: 148px;
  @media ${DEVICE_QUERY_MOBILE} {
    padding-bottom: 128px;
  }
`;

export const HomeMain = styled.div`
  width: 1280px;
  margin: 0 auto;
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 0;
    padding: 0 24px;
    width: calc(100vw - var(--mobile-padding) * 2);
  }
`;

export const TopBanner = styled.div`
  background-color: var(--banner-bg-color);
  display: flex;
  padding: 0 312px;
  flex-direction: row;
  justify-content: center;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    padding: 48px 0;
    width: auto;
    img {
      width: 100vw;
      height: auto;
    }
  }
`;
export const TitleAndDescription = styled.div`
  width: 520px;
  color: var(--title-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  @media ${DEVICE_QUERY_MOBILE} {
    width: 342px;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  width: 560px;
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 56px;
  font-weight: 600;
  line-height: 68px;
  em {
    font-style: normal;
    color: var(--quote-border-color);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    width: auto;
    font-size: 30px;
    line-height: 44px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.div`
  font-family: var(--font-open-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
  }
`;
