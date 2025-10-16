import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite, MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';

import { GlobalContext } from '../context/GlobalState.jsx'

import { POSTER_PATH } from '../globals/globals.js';
import { convertDate, convertRating, truncateOverview } from '../utilities/utilities.js';

const MovieCard = ({ movie, list }) => {
    const { isFavourite, toggleFavourite, isWatch, toggleWatch } = useContext(GlobalContext);

    const handleFavouriteClick = () => {
        toggleFavourite(movie);
    }

    const handleWatchClick = () => {
        toggleWatch(movie);
    }

  return (
    <div className="card">
        {!movie.poster_path 
          ?
          <div>
            <span className="material-symbols-outlined card-missing">broken_image</span> 
          </div>
          :
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" className="card-img" />
        }
        <p className='card-title'>{movie.title}</p>
        <div className='row'>
            <div>{convertDate(movie.release_date)}</div>
            <div>{convertRating(movie.vote_average)}</div>
        </div>
        <p>{truncateOverview(movie.overview)}</p>
        <div className="row">
            <Link to={`/${movie.id}?list=${list}`}><button>More Info</button></Link>
            
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
  );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
    list: PropTypes.string.isRequired,
};

export default MovieCard;
