const API_KEY = import.meta.env.VITE_API_KEY;
import { endPointSearch } from '../globals/globalVariables.js';

import {
  endPointAllBreeds,
  // endPointSearch,
} from '../globals/globalVariables.js';

function getBreeds() {
  return (
    fetch(endPointAllBreeds, {
      // headers: {
      //   'x-api-key': API_KEY,
      // },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        return response.json();
      })
      // .then((data) => data)
      .catch((error) => {
        throw error;
      })
  );
}

function getRandomCatImage(breedin) {
  return (
    fetch(`${endPointSearch}breed_ids=${breedin}&api_key=${API_KEY}&limit=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        return response.json();
      })
      // .then((data) => data)
      .catch((error) => {
        throw error;
      })
  );
}

export { getBreeds, getRandomCatImage };
