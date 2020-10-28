export const resolveOriginalSizeImage = (filename: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(`@public/images/${filename}?original`)
}

export const resolveMultipleSizeImages = (
  filename: string
): {
  src: string
  srcSet: string[]
} => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(`@public/images/${filename}?resize&sizes[]=256&sizes[]=512&sizes[]=1024`)
}
