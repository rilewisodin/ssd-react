import { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard'

import { appTitle } from '../globals/globals';

const PageWatchList = () => {
    const { watchList } = useContext(GlobalContext);

    useEffect(() => {
        document.title = `${appTitle} - Watch List`;
    }, []);

    return (
        <main>
            <section>
                {watchList.length > 0 
                    ? (
                    <article className='movie-container'>
                    {watchList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} list='watch' />
                    ))}
                    </article>
                    ) : (
                        <>
                        <p>Sorry, you have no watch list movies.</p>
                        <p>Return to the Home page to select one or more movies for this list.</p>
                      </>
                    )
                }
            </section>
        </main>
    );
};

export default PageWatchList;
