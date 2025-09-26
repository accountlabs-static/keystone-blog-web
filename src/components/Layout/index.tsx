'use client'
import React, { ReactNode } from 'react'
import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from 'next/dynamic'
import '@keystonehq/header-footer-components/dist/style.css'
import styled from 'styled-components'

const Header = dynamic(
  () => import('@keystonehq/header-footer-components').then((res) => res.Header),
  {
    ssr: false,
  }
)
const Footer = dynamic(
  () => import('@keystonehq/header-footer-components').then((res) => res.Footer),
  {
    ssr: false,
  }
)

const StyledHeader = styled.div`
  height: 64px;
  background: var(--banner-bg-color);
`

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <main>{children}</main>
      <Footer />
      <GoogleTagManager gtmId="G-WCBLWW84S2" />
    </>
  )
}
