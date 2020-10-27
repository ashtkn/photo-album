import { NextApiRequest, NextApiResponse } from 'next'

import photos from '../../constants/photo-list'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(photos)
}
