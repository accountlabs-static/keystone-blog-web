'use client'
import React, { ReactNode } from 'react';
import {Header, Footer} from 'header-footer';
import { GoogleTagManager } from '@next/third-parties/google';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId="G-WCBLWW84S2" />
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  )
}