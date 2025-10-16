import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  user: null
}

// Create context
const GlobalContext = createContext(initialState);

// Provider component
function GlobalProvider({ children }){
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function createUser(user) {
    dispatch({
      type: 'CREATE_USER',
      payload: user
    });
  }
  
  function deleteUser() {
    dispatch({
      type: 'DELETE_USER',
      payload: null
    });
  }

  return (
    <GlobalContext.Provider 
        value={{
          user: state.user, 
          createUser,
          deleteUser}}>
      {children}
    </GlobalContext.Provider>
  );

}

export { GlobalContext, GlobalProvider }