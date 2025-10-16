// Page - Portfolio
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "../scss/gallery.scss";
import { appTitle } from "../globals/globals";

const PagePortfolioItem = () => {
  // Use the React Router useParams() custom hook to extract the
  // "id" parameter passed to this component...
  let { id } = useParams();

  useEffect(() => {
    document.title = `${appTitle} - Portfolio Item ${id}`;
  }, [id]);

  // Make sure id is a whole number between 1 and 6 (inclusive)
  // ...If is not...then send them back to the Portfolio page
  if (isNaN(id) || id % 1 !== 0 || id < 1 || id > 6) {
    return <Navigate to="/portfolio" replace={true} />;
  }

  return (
    <main>
      <section className="portfolio-item-section">
        <h2>Portfolio Item {id}</h2>
        <div className="gallery-single-item">
          <div className="gallery-item">
            <img
              src={`../images/kittens-0${id}.jpg`}
              alt="Cat portfolio picture"
            />
          </div>
        </div>
        <Link to="/portfolio" className="link-back-to-portfolio">
          Back to Portfolio Page
        </Link>
      </section>
    </main>
  );
};

export default PagePortfolioItem;
