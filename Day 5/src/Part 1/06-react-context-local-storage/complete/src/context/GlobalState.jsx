import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create context
const GlobalContext = createContext();

// Derive initial state from local storage
// const initialUserState = (() => {
//   const storedUser = localStorage.getItem("user");
//   return storedUser ? JSON.parse(storedUser) : null;
// })();

let initialUserState = null;

if (localStorage.getItem('user')) {
  initialUserState = JSON.parse(localStorage.getItem('user'));
}

// Provider component
function GlobalProvider({ children }) {
  const [user, setUser] = useState(initialUserState);

  // Actions
  function createUser(user) {
    setUser(user);
  }

  function deleteUser() {
    setUser(null);
  }

  // Update local storage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <GlobalContext.Provider value={{ user, createUser, deleteUser }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalProvider };
