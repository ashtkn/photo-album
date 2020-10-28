import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import PhotoGallery from '../components/photo-gallery'
import { siteTitle } from '../constants/site-info'
import { getSortedPhotoList, Photo } from '../lib/photos-repository'

const Index = ({ photos }: { photos: Photo[] }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <Header className="pb-4" />
        <PhotoGallery photos={photos} />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const photos = getSortedPhotoList()
  return {
    props: {
      photos,
    },
  }
}
