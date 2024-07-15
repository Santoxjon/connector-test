import { Route } from 'OpenApiRouter';
import { handleRocketsOne } from '.';
describe('Get one rocket operation', () => {
  it('should return a 200 response', async () => {
    // ? The following rocket ID is a valid rocket ID, but it is not guaranteed to be valid in the future.
    // ? If this test fails, it is possible that the rocket ID is no longer valid.
    // ? To update this ID make a request to the following endpoint:
    // ? https://api.spacexdata.com/v4/rockets

    const rocketId = '5e9d0d96eda699382d09d1ee';

    const route: Route = {
      route: `/space/rockets/${rocketId}`,
      operation: {
        operationId: 'rocketsOne',
        responses: {},
      },
      pathParameters: {
        rocketId,
      },
    };

    const response = await handleRocketsOne(route);

    expect(response?.status).toBe(200);
  });

  it('should return a 404 response', async () => {
    const rocketId = '0123456789';

    const route: Route = {
      route: `/space/rockets/${rocketId}`,
      operation: {
        operationId: 'rocketsOne',
        responses: {},
      },
      pathParameters: {
        rocketId,
      },
    };

    const response = await handleRocketsOne(route);

    expect(response?.status).toBe(404);
  });

  it('should return a 500 response', async () => {
    const rocketId = '0123456789';

    const route: Route = {
      route: `/space/rockets/${rocketId}`,
      operation: {
        operationId: 'rocketsOne',
        responses: {},
      },
      pathParameters: {},
    };

    const response = await handleRocketsOne(route);

    expect(response?.status).toBe(500);
  });
});
