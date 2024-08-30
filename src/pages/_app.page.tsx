import type { AppProps } from 'next/app'
import React from 'react'
import 'gardevoir'
import { GoogleAnalytics } from '@next/third-parties/google'
import Layout from '../components/Layout'
import '../styles/global.css'
import '../styles/fonts.css'
import { mont_serrat, open_sans } from '../styles/font'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="nwIg5t9B3A_0g81tXoaDStD6Z2uYyCDU7GBSALU7ZDM"
        />
      </Head>
      <div className={`${open_sans.variable} ${mont_serrat.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      <GoogleAnalytics gaId="G-WCBLWW84S2" />
    </>
  )
}
