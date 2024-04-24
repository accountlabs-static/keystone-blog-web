'use client'
import React, { ReactNode } from 'react';
import { Header, Footer } from 'header-footer';
import { GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Keystone Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <GoogleTagManager gtmId="G-WCBLWW84S2" />
    </>
  )
}