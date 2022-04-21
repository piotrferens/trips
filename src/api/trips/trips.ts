import { Trip } from './trips.types';
import { fetcher } from '../utils';

export const fetchTrips = async () => fetcher<Array<Trip>>(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
