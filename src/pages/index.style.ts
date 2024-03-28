import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../styles/breakpoints';

export const HomeWrapper = styled.div`
`;

export const HomeMain = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const TopBanner = styled.div`
  background-color: var(--banner-bg-color);
  display: flex;
  padding: 0 312px;
  flex-direction: row;
  justify-content: center;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    padding: 48px 24px;
    width: auto;
    picture > img {
      width: 342px;
      height: 190px;
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
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-family: "Mont";
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
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.div`
  font-family: var(--font-open-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
