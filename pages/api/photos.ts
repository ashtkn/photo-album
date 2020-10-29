import { NextApiRequest, NextApiResponse } from 'next'

import photos from '../../data/photos'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    data: photos.map(({ filename, ...rest }) => {
      const baseUrl = req.headers.host
      return {
        image: `${baseUrl}/images/${filename}`,
        ...rest,
      }
    }),
  })
}
