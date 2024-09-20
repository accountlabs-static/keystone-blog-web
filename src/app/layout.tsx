import React from 'react'
import 'gardevoir'
import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/global.css'
import '../styles/fonts.css'
import { mont_serrat, open_sans } from '../styles/font'
import Layout from '@/components/Layout'
import StyledComponentsRegistry from '@/lib/styled'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="nwIg5t9B3A_0g81tXoaDStD6Z2uYyCDU7GBSALU7ZDM"
        />
      </head>
      <body>
        <div className={`${open_sans.variable} ${mont_serrat.variable}`}>
          <Layout>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Layout>
        </div>
        <GoogleAnalytics gaId="G-WCBLWW84S2" />
      </body>
    </html>
  )
}
