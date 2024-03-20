import React from 'react';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}