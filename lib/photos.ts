import photos from '../constants/photo-list'

export const getSortedPhotosData = (): {
  src: string
  width: number
  height: number
  title?: React.ReactNode
}[] => {
  return photos.map(({ filename, width, height }) => {
    console.log(filename)
    return {
      src: require(`@public/images/${filename}`),
      width,
      height,
    }
  })
}
