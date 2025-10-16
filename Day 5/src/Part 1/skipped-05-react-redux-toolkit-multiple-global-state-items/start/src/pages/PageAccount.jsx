import { useEffect } from 'react';
import AccountManager from '../components/AccountManager';
import { appTitle } from '../globals/globalVariables';
import { useSelector } from 'react-redux';

function PageAccount() {

	const username = useSelector((state) => state.user.username);

	useEffect(() => {
		document.title = `${appTitle} - Account`;
	}, []);

    return (
        <section>
            <h2>Manage Account</h2>
            {username === null ? <p>Log in to manage your account.</p> : <AccountManager />}
        </section>
    );
	
}

export default PageAccount;
