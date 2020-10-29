import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'
import PhotoGallery from '../components/photo-gallery'
import { siteInfo } from '../constants'
import { getPhotoList, Photo } from '../lib/photo-repository'

type IndexProps = {
  photos: Photo[]
}

const Index: React.FC<IndexProps> = ({ photos }) => {
  const { title } = siteInfo
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header className="pb-4" />
        <PhotoGallery className="pb-4" photos={photos} />
        <Footer className="pt-4" />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const photos = getPhotoList()
  return {
    props: {
      photos,
    },
  }
}
