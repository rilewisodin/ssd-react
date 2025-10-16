import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create context
const GlobalContext = createContext();

// Provider component
function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);

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
