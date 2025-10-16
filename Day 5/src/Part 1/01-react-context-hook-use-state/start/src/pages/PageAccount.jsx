import { useContext, useEffect } from 'react';
import AccountManager from '../components/AccountManager';
import { appTitle } from '../globals/globalVariables';
import { GlobalContext } from '../context/GlobalState';

function PageAccount() {
  const { user } = useContext(GlobalContext);

  useEffect(() => {
    document.title = `${appTitle} - ${user} Account`;
  }, [user]);

  return (
    <main>
      <section>
        <h2>Manage Account</h2>
        {user === null && <p>Log in to manage your account.</p>}
        {user !== null && <AccountManager />}
      </section>
    </main>
  );
}

export default PageAccount;
