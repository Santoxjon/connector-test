import { Result } from 'dispatch';
import { Route } from 'OpenApiRouter';
import fs from 'fs';
import * as yaml from 'js-yaml';
import { SpaceXApi } from 'services/spaceX/SpaceX';
import { formatRocket, getOneRocket } from '../../services/spaceX/spacex.helper';

export const handleRocketsOne = async (_route: Route): Promise<Result | null> => {
  const params = _route.pathParameters;

  try {
    if (!params.rocketId) {
      throw new Error('rocketId is required');
    }

    // Get the spec so we have spaceX API details
    const specContent = fs.readFileSync('src/services/spaceX/spec.yml', 'utf8');
    const spec = yaml.load(specContent) as SpaceXApi;

    const API_SERVER_URL = spec.servers[0].url;
    const API_ENDPOINT = Object.keys(spec.paths)[0].replace('{rocketId}', params.rocketId);

    const rawRocket = await getOneRocket(`${API_SERVER_URL}${API_ENDPOINT}`);
    if (!rawRocket) throw new Error('Rocket not found');

    const formattedRocket = formatRocket(rawRocket);

    return {
      status: 200,
      body: {
        ...formattedRocket,
      },
    };
  } catch (error) {
    if (error.message === 'Rocket not found') {
      return {
        status: 404,
        body: {
          message: error.message,
        },
      };
    }

    return {
      status: 500,
      body: {
        message: error.message,
      },
    };
  }
};
