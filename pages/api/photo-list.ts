import { NextApiRequest, NextApiResponse } from 'next'

import photos from '../../constants/photos'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(photos)
}
