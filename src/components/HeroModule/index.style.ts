import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

export const HeroModuleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    gap: 40px; 
  }
`;
