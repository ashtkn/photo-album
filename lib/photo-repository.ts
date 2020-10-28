import photos from '../data/photos'
import {
  resolveMultipleSizeImages,
  resolveOriginalSizeImage,
} from './photo-resolver'

export type Photo = {
  src: string
  srcSet: string[]
  sizes: string[]
  width: number
  height: number
  originalSizeImageSrc: string
  caption?: React.ReactNode
}

export const getPhotoList = (): Photo[] => {
  return photos.map(({ filename, title, width, height }) => {
    const { src, srcSet } = resolveMultipleSizeImages(filename)
    const sizes = ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw']
    const originalSizeImage = resolveOriginalSizeImage(filename)
    return {
      src,
      srcSet,
      sizes,
      width,
      height,
      originalSizeImageSrc: originalSizeImage,
      caption: title,
    }
  })
}
