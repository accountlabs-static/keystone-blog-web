import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 118px 0;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-wrap: wrap;
    margin: 64px 0;
  }
`;

export const CategoryLable = styled.span`
  font-family: var(--font-montserrat);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: var(--publish-time-color);
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid var(--category-border-color) ;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 18px;
  }
`;
