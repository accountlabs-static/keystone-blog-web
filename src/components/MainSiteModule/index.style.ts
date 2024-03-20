import styled from 'styled-components';

export const MainSiteModuleWrapper = styled.div`
  width: 880px;
  height: 270px;
  margin: 120px auto;
  background-color: var(--quote-bg-color);
  img {
    position: relative;
    left: 56%;
    top: -124%;
  }
`;

export const MainSiteInfo = styled.div`
  padding: 42px 72px;
`;

export const Links = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 16px;

  img {
    position: inherit;
  }
`;

export const Title = styled.div`
  font-family: 'Mont';
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-family: var(--font-open-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const Explore = styled.a`
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border: 1.5px solid var(--button-border-color);
  display: inline-flex;
  align-items: center;
  padding: 12px 18px 12px 28px;
  text-decoration: none;
  color: var(--banner-bg-color);
  border-image: var(--color-gd-primary) 1;
  &:hover {
    background: linear-gradient(90deg, #1D56F5 0%, #00B3F5 100%);
    color: var(--hover-text-color);
  }
`;

export const Image = styled.img``;
