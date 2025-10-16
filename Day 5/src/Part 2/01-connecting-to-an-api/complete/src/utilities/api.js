const API_ENDPOINT = "https://api.thecatapi.com/v1";
const API_KEY = import.meta.env.VITE_CAT_API_KEY;

function getRandomCatImage(breedId) {
  return fetch(`${API_ENDPOINT}/images/search?limit=1&breed_ids=${breedId}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((err) => {
      return err;
    });
}

function getBreeds() {
  return fetch(`${API_ENDPOINT}/breeds`, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((err) => {
      return err;
    });
}

export { getBreeds, getRandomCatImage };
