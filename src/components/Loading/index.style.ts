import styled from 'styled-components'
import type { IProps } from './index'

export const Main = styled.div<IProps>`
  --sk-uib-speed: 1.75s;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || '4px'};
  width: ${(props) => props.width || '56px'};
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) =>
    props.background || '#000000'};
    opacity: 0.2;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    animation: wobble var(--sk-uib-speed) ease-in-out infinite;
    transform: translateX(-95%);
    background-color: ${(props) => props.color || '#3d71ff'};
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-95%);
    }
    50% {
      transform: translateX(95%);
    }
  }
`
