import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

export const CategoryModuleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-top: 80px;
  flex-direction: column;
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
    gap: 48px;
  }
`;

export const CategoryName = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  height: fit-content;
  padding: 8px 0;
  border-bottom: 1px solid var(--category-border-color);
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 20px;
    line-height: 30px;
    height: fit-content;
    padding: 16px 0;
}
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
