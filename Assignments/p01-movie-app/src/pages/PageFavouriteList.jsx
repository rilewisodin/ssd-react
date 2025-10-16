import { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard'

import { appTitle } from '../globals/globals';

const PageFavouriteList = () => {
    const { favouriteList } = useContext(GlobalContext);

    useEffect(() => {
        document.title = `${appTitle} - Favourite List`;
    }, []);

    return (
        <main>
            <section>
                {favouriteList.length > 0 
                    ? (
                    <article className='movie-container'>
                    {favouriteList.map((favourite) => (
                        <MovieCard key={favourite.id} movie={favourite} list='favourite' />
                    ))}
                    </article>
                    ) : (
                      <>
                        <p>Sorry, you have no favourite list movies.</p>
                        <p>Return to the Home page to select one or more movies for this list.</p>
                      </>
                    )
                }
            </section>
        </main>
    );
};

export default PageFavouriteList;
