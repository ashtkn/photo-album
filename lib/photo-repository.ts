import moment from 'moment'

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
  createDate: string
}

export const getSortedPhotoList = (): Photo[] => {
  return photos
    .map(({ filename, title, width, height, createDate }) => {
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
        createDate: moment(createDate),
      }
    })
    .sort((a, b) => {
      return a.createDate.isBefore(b.createDate) ? 1 : -1
    })
    .map(({ createDate, ...rest }) => {
      return {
        ...rest,
        createDate: createDate.format('YYYY/MM/DD'),
      }
    })
}
