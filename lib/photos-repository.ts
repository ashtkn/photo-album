import moment from 'moment'

import photos from '../constants/photos'

export type Photo = {
  src: string
  width: number
  height: number
  date: string
  caption?: React.ReactNode
}

export const getSortedPhotoList = (): Photo[] => {
  return photos
    .map(({ filename, title, width, height, createdAt }) => {
      return {
        src: require(`@public/images/${filename}`),
        caption: title,
        width,
        height,
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
