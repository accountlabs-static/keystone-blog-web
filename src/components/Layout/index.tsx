'use client'
import React, { ReactNode } from 'react';
import {Header, Footer} from 'header-footer';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}