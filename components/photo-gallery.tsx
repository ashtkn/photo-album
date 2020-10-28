import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import { Photo } from '../lib/photos-repository'

export type PhotoGalleryProps = {
  photos: Photo[]
  className?: string
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, className }) => {
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
    <div className={className}>
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
  )
}

export default PhotoGallery
