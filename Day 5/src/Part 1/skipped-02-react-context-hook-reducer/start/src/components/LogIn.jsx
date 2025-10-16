function LogIn() {
  const user = null;

  function handleLogIn() {}

  function handleLogOut() {}

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
