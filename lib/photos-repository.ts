import moment from 'moment'

import photos from '../constants/photos'

export const getSortedPhotosData = (): {
  src: string
  width: number
  height: number
  date: string
  title?: React.ReactNode
}[] => {
  return photos
    .map(({ filename, width, height, createdAt }) => {
      return {
        src: require(`@public/images/${filename}`),
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
