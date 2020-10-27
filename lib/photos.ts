import photos from '../constants/photo-list'

export const getSortedPhotosData = (): {
  src: string
  width: number
  height: number
  title?: React.ReactNode
}[] => {
  return photos.map((photo) => {
    return {
      ...photo,
    }
  })
}
