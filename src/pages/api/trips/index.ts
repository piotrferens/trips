import type { NextApiRequest, NextApiResponse } from 'next'
import { tripsMocks, Trip } from '../../../mocks'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Trip>>
) {
  res.status(200).json(tripsMocks)
}
