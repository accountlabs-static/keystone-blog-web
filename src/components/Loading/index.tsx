import React from 'react';
import { Main } from './index.style';

export interface IProps {
    color?: string
    background?: string
    width?: string
    height?: string
}

const Loading = (props: IProps) => {
  return <Main {...props} />;
}

export default Loading;

