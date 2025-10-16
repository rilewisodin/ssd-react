import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create context
const GlobalContext = createContext();

// Provider component
function GlobalProvider({ children }) {
  // getItem will return null if there is no user in localStorage
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    } else if (user === null) {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Actions
  function createUser(user) {
    setUser(user);
  }

  function deleteUser() {
    setUser(null);
  }

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
