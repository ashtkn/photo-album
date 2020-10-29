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
  title: string
  location: string
  cameraMaker: string
  cameraModel: string
  lens: string
  focalLength: string
  exposureTime: string
  fNumber: string
  isoSpeedRatings: string
  creatorTool: string
}

export const getPhotoList = (): Photo[] => {
  return photos.map(
    ({
      filename,
      width,
      height,
      title,
      location,
      cameraMaker,
      cameraModel,
      lens,
      focalLength,
      exposureTime,
      fNumber,
      isoSpeedRatings,
      creatorTool,
    }) => {
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
        title,
        location,
        cameraMaker,
        cameraModel,
        lens,
        focalLength,
        exposureTime,
        fNumber,
        isoSpeedRatings,
        creatorTool,
      }
    }
  )
}

export const getShuffledPhotoList = (): Photo[] => {
  return getPhotoList().sort((a, b) => {
    return Math.random() < 0.5 ? 1 : -1
  })
}
