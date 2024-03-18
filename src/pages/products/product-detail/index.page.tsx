import React from 'react';
import { ProductContainer } from './index.style';

export default function ProductDetail() {
  return <ProductContainer>
    <h1>ProductDetail
      <button onClick={() => { console.log('click me') }}>Click Me</button>
    </h1>
  </ProductContainer>
}