import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import '../styles/fonts.css'
import { mont_serrat, open_sans } from '../styles/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${open_sans.variable} ${mont_serrat.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
