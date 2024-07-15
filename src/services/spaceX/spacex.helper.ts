import chalk from 'chalk';
import { Rocket } from 'operations/rocketsOne/Rocket';

export const getOneRocket = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error('Rocket not found');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // We don't want to log the error if the rocket is not found, we handle it later.
    if (error.message !== 'Rocket not found') {
      console.log(chalk`{dim ${new Date().toTimeString().substring(0, 8)}} {magenta http} {red ERROR} ${error}.`);
    }
  }
};

export const formatRocket = (rawRocket: any): Rocket => {
  let formattedRocket: Rocket = {
    id: rawRocket.id,
    company: rawRocket.company.toUpperCase(),
    country: rawRocket.country,
    main_image: rawRocket.flickr_images[0],
    cost_per_launch: {
      amount: rawRocket.cost_per_launch,
      currency: 'USD',
    },
  };

  return formattedRocket;
};
