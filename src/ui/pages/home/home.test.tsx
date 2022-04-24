import { render, screen } from '@testing-library/react';
import { AppProvider } from 'src/app-provider';
import HomePage, { getServerSideProps, HomePageProps } from 'src/pages';
import { tripsMocks } from 'src/mocks';
import * as trips from 'src/api/trips/trips';

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('display header when there is no recently viewed trips', async () => {
    jest.spyOn(trips, 'fetchTrips').mockResolvedValueOnce([]);

    const tripsData = await trips.fetchTrips();

    render(
      <AppProvider>
        <HomePage trips={tripsData} />
      </AppProvider>,
    );

    expect(screen.getByText('Looks like there are no recently viewed trips')).toBeInTheDocument();
  });

  test('display header when there is error', async () => {
    jest.spyOn(trips, 'fetchTrips').mockRejectedValueOnce(new Error('there was an error'));

    let tripsData;

    try {
      tripsData = await trips.fetchTrips();
    } catch {}

    render(
      <AppProvider>
        <HomePage trips={tripsData as HomePageProps['trips']} />
      </AppProvider>,
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  test('display trips list', async () => {
    jest.spyOn(trips, 'fetchTrips').mockResolvedValueOnce(tripsMocks);

    const tripsData = await trips.fetchTrips();

    render(
      <AppProvider>
        <HomePage trips={tripsData} />
      </AppProvider>,
    );

    expect(screen.getByText('Recenlty viewed trips')).toBeInTheDocument();
    expect(screen.getByText('11 Countries, 25 Days')).toBeInTheDocument();
    expect(screen.getByText('Florence')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('From €2.88')).toBeInTheDocument();
    expect(screen.getByText('Price €152')).toBeInTheDocument();
  });
});

describe('HomePage getServerSideProps', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('return trips data', async () => {
    const mockdedData = [
      {
        id: 1,
        thumbnailUrl:
          'https://media.istockphoto.com/photos/young-hipster-couple-visiting-stockholm-picture-id473695458?s=612x612',
        countries: 11,
        days: 25,
        title: 'Stockholm',
        rate: 4.4,
        minimalPrice: 2.87,
        previousPrice: 4.5,
      },
    ];

    jest.spyOn(trips, 'fetchTrips').mockResolvedValueOnce(mockdedData);

    const serverSideProps = await getServerSideProps();

    expect(serverSideProps.props.trips).toEqual(mockdedData);
  });

  test('return null as trips data when error occurs', async () => {
    jest.spyOn(trips, 'fetchTrips').mockRejectedValueOnce(new Error('there was an error'));

    const serverSideProps = await getServerSideProps();

    expect(serverSideProps.props.trips).toEqual(null);
  });
});
