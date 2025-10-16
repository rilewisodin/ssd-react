// Page - Portfolio
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
import "../scss/gallery.scss";

const PagePortfolio = () => {
  useEffect(() => {
    document.title = `${appTitle} - Portfolio`;
  }, []);

  return (
    <main>
      <section>
        <h2>Portfolio Page</h2>
        <div className="gallery">
          <Link to="/portfolio/1" className="gallery-item">
            <img src={"../images/kittens-01.jpg"} alt="Orange kitten" />
          </Link>
          <Link to="/portfolio/2" className="gallery-item">
            <img
              src={"../images/kittens-02.jpg"}
              alt="Black and brown striped kitten"
            />
          </Link>
          <Link to="/portfolio/3" className="gallery-item">
            <img src={"../images/kittens-03.jpg"} alt="Three kittens" />
          </Link>
          <Link to="/portfolio/4" className="gallery-item">
            <img
              src={"../images/kittens-04.jpg"}
              alt="Orange kitten lying in the grass"
            />
          </Link>
          <Link to="/portfolio/5" className="gallery-item">
            <img src={"../images/kittens-05.jpg"} alt="White kitten" />
          </Link>
          <Link to="/portfolio/6" className="gallery-item">
            <img
              src={"../images/kittens-06.jpg"}
              alt="Four kittens sitting on the grass"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PagePortfolio;
