// Page Home

import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globalVariables';
import { getBreeds, getRandomCatImage } from '../utilities/api';

function PageHome() {
  const [breeds, setBreeds] = useState([]);
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${appTitle} - Home`;

    getBreeds()
      .then((data) => {
        console.log(data);
        setBreeds(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleGetCat(e) {
    e.preventDefault();

    const breedId = e.target.selectBreed.value;
    if (!breedId) {
      alert('Please select a breed');
      return;
    }

    // clear state first
    setCatData(null);
    setLoading(true);

    getRandomCatImage(breedId)
      .then((data) => {
        console.log(data);
        if (data.length === 0) {
          alert('ERROR: API failed to find matching image for breed');
        } else {
          setCatData(data[0]);
        }
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main>
      <section className="cat-photo-section">
        <h2>Cat Photos</h2>
        <div className="cat-container">
          <div className="get-cat-form-container">
            <form onSubmit={handleGetCat} className="get-cat-form">
              <div className="input-group">
                <label htmlFor="selectBreed">Select Breed: </label>
                {breeds.length === 0 ? (
                  <div className="centered">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  <select name="selectBreed" id="selectBreed" size="5">
                    {breeds.map((breed) => {
                      return (
                        <option key={breed.id} value={breed.id}>
                          {breed.name}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>
              <div className="submit-group">
                <button type="submit">Get Cat Photo</button>
              </div>
            </form>
          </div>
          {loading && (
            <div className="centered">
              <div className="spinner"></div>
            </div>
          )}
          {catData && !loading && (
            <div className="cat-image">
              <img src={catData.url} alt="" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default PageHome;
