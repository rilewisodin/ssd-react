// Page Home

import { useEffect, useState } from "react";
import { appTitle } from "../globals/globalVariables";
import smokey from "../images/smokey.jpg";
import { getBreeds, getRandomCatImage } from "../utilities/api";

function PageHome() {
  const [breeds, setBreeds] = useState([]);
  const [catData, setCatData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
    getBreeds()
      .then((data) => {
        setBreeds(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  function handleGetCat(e) {
    e.preventDefault();
    const breedId = e.target.selectBreed.value;
    setCatData({});
    setLoading(true);
    getRandomCatImage(breedId)
      .then((data) => {
        const catData = data[0];
        setCatData(catData);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
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
          {catData?.url && (
            <div className="cat-image">
              <img src={catData.url} alt={catData.breeds[0].name} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default PageHome;
