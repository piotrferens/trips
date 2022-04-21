import type { NextApiRequest, NextApiResponse } from 'next';
import { tripsMocks } from 'mocks';
import { Trip } from 'api';

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<Trip>>) {
  res.status(200).json(tripsMocks);
}
