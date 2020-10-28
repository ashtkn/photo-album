import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import Avatar from '../components/avatar'
import Layout from '../components/layout'
import { siteTitle } from '../constants/site-info'
import { getSortedPhotoList, Photo } from '../lib/photos-repository'
import styles from './index.module.css'

export default function Home({ photos }: { photos: Photo[] }): JSX.Element {
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
        <div className="flex py-4 items-center">
          <div>
            <Avatar />
          </div>
          <div className="pl-4">
            <h2 className="text-lg">Welcome!</h2>
            <h1 className={styles.title}>Asahi's Photo Gallery</h1>
          </div>
        </div>
        <div className="py-4">
          <Gallery photos={photos} onClick={openLightBox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightBox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(({ src, caption, ...rest }) => ({
                    source: src,
                    caption,
                    ...rest,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const photos = getSortedPhotoList()
  return {
    props: {
      photos,
    },
  }
}
