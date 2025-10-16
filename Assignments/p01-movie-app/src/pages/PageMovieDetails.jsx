import { useEffect, useContext } from "react";
import { Navigate, useNavigate, useParams, useLocation } from "react-router-dom";
import { MdFavorite, MdVisibility } from 'react-icons/md';

import { GlobalContext } from '../context/GlobalState';

import { appTitle, POSTER_PATH } from '../globals/globals.js';
import { convertDate, convertRating } from '../utilities/utilities.js';

const PageMovieDetails = () => {
  const { getMovieById, isFavourite, toggleFavourite, isWatch, toggleWatch } = useContext(GlobalContext);

  const handleFavouriteClick = () => {
      toggleFavourite(movie);
  }

  const handleWatchClick = () => {
      toggleWatch(movie);
  }
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const list = queryParams.get("list");

  const navigate = useNavigate();
  
  let { id } = useParams();
  useEffect(() => {
    document.title = `${appTitle} - Movie ${id}`;
  }, [id]);

  id = id * 1;

  // Make sure id is a whole number. If not, then return to the list page
  if (isNaN(id) || id % 1 !== 0) {
    switch (list) {
      case 'home':
        return <Navigate to="/" replace={true} />;
      case 'favourite':
        return <Navigate to="/favourite-list" replace={true} />;
      case 'watch':
        return <Navigate to="/watch-list" replace={true} />;
      default:
        return <Navigate to="/" replace={true} />;
    }
  }

  const movie = getMovieById(id, list);

  return (
    <main>
      <section>
        <article className="movie-container">
          {!movie.poster_path 
            ?
            <div>
              <span className="material-symbols-outlined card-missing">broken_image</span> 
            </div>
            :
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt={`${movie.title}`} />
          }
          <div>
            <div className='card-title detail'>{movie.title}</div>
            <div className='row'>
                <div className="card-label">Release Date</div>
                <div>{convertDate(movie.release_date)}</div>
            </div>
            <div className='row'>
                <div className="card-label">Rating</div>
                <div>{convertRating(movie.vote_average)}</div>
            </div>
            <p className="card-label no-margin">Overview</p>
            <p>{movie.overview}</p>
            <div className="row">
              <button onClick={() => navigate(-1)}>Return to list</button>
              <div>
                {isFavourite(movie) 
                  ? <MdFavorite className='card-icon favourite' onClick={handleFavouriteClick} />
                  : <MdFavorite className='card-icon' onClick={handleFavouriteClick} />
                }
                {isWatch(movie) 
                  ? <MdVisibility className='card-icon watch' onClick={handleWatchClick} />
                  : <MdVisibility className='card-icon' onClick={handleWatchClick} />
                }
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PageMovieDetails;
