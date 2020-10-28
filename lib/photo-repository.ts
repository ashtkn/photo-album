import moment from 'moment'

import photos from '../constants/photos'
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
  date: string
}

export const getSortedPhotoList = (): Photo[] => {
  return photos
    .map(({ filename, title, width, height, createdAt }) => {
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
        createdAt: moment(createdAt),
      }
    })
    .sort((a, b) => {
      return a.createdAt.isBefore(b.createdAt) ? -1 : 1
    })
    .map(({ createdAt, ...rest }) => {
      return {
        ...rest,
        date: createdAt.format('YYYY/MM/DD'),
      }
    })
}
