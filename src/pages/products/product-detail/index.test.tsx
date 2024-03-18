import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from './index.page';
import '@testing-library/jest-dom'

describe('<ProductDetail />', () => {
  test('renders the example component', () => {
    render(<ProductDetail />);
    const productDetail = screen.getByText(/ProductDetail/i);
    expect(productDetail).toBeInTheDocument();
  });
})

