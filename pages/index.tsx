import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import Layout from '../components/layout'
import { siteTitle } from '../constants/site-info'
import { getSortedPhotosData } from '../lib/photos-repository'

export default function Home({
  photos,
}: {
  photos: {
    src: string
    width: number
    height: number
    title?: React.ReactNode
  }[]
}): JSX.Element {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

  const openLightBox = React.useCallback(
    (event, { index }: { index: number }) => {
      setCurrentImage(index)
      setViewerIsOpen(true)
    },
    []
  )

  const closeLightBox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <Gallery photos={photos} onClick={openLightBox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightBox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  source: x.src,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const photos = getSortedPhotosData()
  return {
    props: {
      photos,
    },
  }
}
