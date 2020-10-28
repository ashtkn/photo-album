import dumpedPhotoInfoList from './dumped-photo-info.json'
import manualPhotoInfoList from './manual-photo-info.json'

const photos = dumpedPhotoInfoList.map(({ filename, ...rest }) => {
  const correspondingManualPhotoInfo = manualPhotoInfoList.find(
    (e) => filename === e.filename
  )
  return {
    ...rest,
    ...correspondingManualPhotoInfo,
  }
})

export default photos
