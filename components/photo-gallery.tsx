import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import { Photo } from '../lib/photo-repository'
import Emoji from './emoji'

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
      <Gallery
        photos={photos.map(({ src, srcSet, sizes, width, height }) => ({
          src,
          srcSet,
          sizes,
          width,
          height,
          loading: 'lazy',
        }))}
        onClick={openLightBox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(
                ({
                  originalSizeImageSrc,
                  title,
                  location,
                  cameraModel,
                  lens,
                }) => ({
                  source: originalSizeImageSrc,
                  caption: (
                    <div>
                      <p className="text-lg">{title}</p>
                      {location ? (
                        <p className="text-xs">
                          <Emoji className="p-1" symbol="📍" />
                          {`${location}`}
                        </p>
                      ) : null}
                      {cameraModel && lens ? (
                        <p className="text-xs">
                          <Emoji className="p-1" symbol="📷" />
                          {`${cameraModel}, ${lens}`}
                        </p>
                      ) : null}
                    </div>
                  ),
                })
              )}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default PhotoGallery
