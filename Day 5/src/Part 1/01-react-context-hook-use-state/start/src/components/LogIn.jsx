import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function LogIn() {
  const { user, createUser, deleteUser } = useContext(GlobalContext);

  function handleLogIn() {
    const newUser = prompt('Enter Username');
    createUser(newUser);
  }

  function handleLogOut() {
    deleteUser();
  }

  return (
    <>
      {user === null ? (
        <button onClick={handleLogIn}>Log In</button>
      ) : (
        <button onClick={handleLogOut}>Log Out</button>
      )}
    </>
  );
}

export default LogIn;
