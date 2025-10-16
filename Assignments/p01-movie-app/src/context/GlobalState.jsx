import { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import movieReducer from './movieReducer';

const loadFromLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

// Initial state
const initialState = {
  category: "",
  movies: [],
  favouriteList: loadFromLocalStorage("favouriteList", []),
  watchList: loadFromLocalStorage("watchList", []),
};

// Create context
const GlobalContext = createContext(initialState);

// Provider component
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // Save to localStorage whenever `favouriteList` or `watchList` changes
  useEffect(() => {
    localStorage.setItem("favouriteList", JSON.stringify(state.favouriteList));
  }, [state.favouriteList]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state.watchList]);

  function getMovieById(id, list) {
    switch (list) {
      case 'home':
        return state.movies.find(movie => movie.id === id);
      case 'favourite':
        return state.favouriteList.find(movie => movie.id === id);
      case 'watch':
        return state.watchList.find(movie => movie.id === id);
      default:
        return {};
    }
  }
  
  function isFavourite(movie) {
    return Array.isArray(state.favouriteList) && 
      state.favouriteList.some(favouriteMovie => movie.id === favouriteMovie.id);
  }
    
  function isWatch(movie) {
    return Array.isArray(state.watchList) && 
      state.watchList.some(watchMovie => movie.id === watchMovie.id);
  }
  
  // Actions
  function toggleFavourite(movie) {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: movie,
    });
  }
  
  function toggleWatch(movie) {
    dispatch({
      type: 'TOGGLE_WATCH',
      payload: movie,
    });
  }

  function setMovies(movies) {
    dispatch({
      type: 'SET_MOVIES',
      payload: movies,
    });    
  }    
  
  function setCategory(category) {
    dispatch({
      type: 'SET_CATEGORY',
      payload: category,
    });  
  }  

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        category: state.category,
        movies: state.movies,
        favouriteList: state.favouriteList,
        watchList: state.watchList,
        setMovies,
        setCategory,
        toggleFavourite,
        toggleWatch,
        isFavourite,
        isWatch,
        getMovieById,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { GlobalContext, GlobalProvider };
