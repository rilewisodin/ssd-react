import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);

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
