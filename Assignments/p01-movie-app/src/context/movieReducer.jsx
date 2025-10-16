function movieReducer(state, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
      case 'TOGGLE_FAVOURITE':
        return {
          ...state,
          favouriteList: state.favouriteList.some(favouriteMovie => action.payload.id === favouriteMovie.id)
            ? state.favouriteList.filter((item) => item.id !== action.payload.id) // Remove from favourites
            : [...state.favouriteList, action.payload], // Add to favourites
        };
      case 'TOGGLE_WATCH':
        return {
          ...state,
          watchList: state.watchList.some(watchMovie => action.payload.id === watchMovie.id)
            ? state.watchList.filter((item) => item.id !== action.payload.id) // Remove from watch
            : [...state.watchList, action.payload], // Add to watch
        };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}

export default movieReducer;
