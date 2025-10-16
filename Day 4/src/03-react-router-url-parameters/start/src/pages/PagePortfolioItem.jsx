// Page - Portfolio
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../scss/gallery.scss';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PagePortfolioItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // this would not be good at scale, but works for this example
    const validIds = ['1', '2', '3', '4', '5', '6'];
    if (!validIds.includes(id)) {
      navigate('/404');
    }

    document.title = `${appTitle} - Portfolio Item ${id}`;
  }, [id, navigate]);

  return (
    <main>
      <section className="portfolio-item-section">
        <h2>Portfolio Item Change Me</h2>
        <div className="gallery-single-item">
          <div className="gallery-item">
            <img
              src={`/images/kittens-0${id}.jpg`}
              alt={`Cat portfolio pic ${id}`}
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
