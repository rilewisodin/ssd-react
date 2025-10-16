import { useEffect } from 'react';
import Games from '../components/Games';
import { appTitle } from '../globals/globalVariables';

function PageGames() {

    useEffect(() => {
		document.title = `${appTitle} - Games`;
	}, []);

    return (
        <section className="games-section">
            <h2>Games</h2>
            <Games />
        </section>
    );
}

export default PageGames;
