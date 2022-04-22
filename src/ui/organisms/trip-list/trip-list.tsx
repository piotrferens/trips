import { Grid, Typography } from 'src/ui/atoms';
import { TripListProps } from './trip-list.types';
import * as S from './trip-list.styles';

export const TripList = ({ trips }: TripListProps) => {
  return trips.length > 0 ? (
    <div>
      <S.Title el="h1" align="center">
        Recenlty viewed trips
      </S.Title>
      <Grid>
        {trips.map((trip, index) => (
          <S.TripCard key={index} {...trip} />
        ))}
      </Grid>
    </div>
  ) : (
    <Typography el="h1" align="center">
      Looks like there are no recently viewed trips
    </Typography>
  );
};
