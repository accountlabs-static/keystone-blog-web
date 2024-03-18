import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>Header{}</header>
      <main className='test'>{children}</main>
      <footer>Footer</footer>
    </>
  )
}