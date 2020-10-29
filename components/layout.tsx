import Head from 'next/head'
import React from 'react'

import { siteInfo } from '../constants'

export type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { author, description, image, title, url } = siteInfo
  return (
    <div className="lg:container p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={description} />
        <meta name="twitter:creator" content={author} />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
