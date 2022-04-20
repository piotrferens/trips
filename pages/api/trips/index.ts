import type { NextApiRequest, NextApiResponse } from 'next'
import trips from '../../../mocks/trips.json'

export type Trips = Array<{
  id: number;
  countries: number;
  days: number;
  title: string;
  rate: number;
  minimalPrice: number;
  previousPrice: number;
}>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trips>
) {
  res.status(200).json(trips)
}
