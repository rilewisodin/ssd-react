import { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard'

import { appTitle, categories } from '../globals/globals';

const PageHome = () => {
    const { movies, setMovies, category, setCategory } = useContext(GlobalContext);

    // Initial fetch of movies on page load
    useEffect(() => {
        document.title = `${appTitle} - Home`;

        if (!category) {
            setCategory('popular');
        } else {
            setCategory(`${category}`);
        }
    }, []);

    // Fetch movies whenever category changes
    useEffect(() => {
        if (!category) return; // Prevent fetch if no category is selected

        setCategory(`${category}`);

        const fetchMoviesByCategory = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=308b9e10ce5d8ba5ccb85de361f5686b&page=1`);

            if (!response.ok) {
                throw new Error('Fetch movies error');
            }

            const data = await response.json();
            setMovies(data.results.slice(0, 12)); // Update movies based on selected category
        };

        fetchMoviesByCategory();
    }, [category]); // Runs whenever 'category' changes
    
    return (
        <main>
            <section>
                <div className="select-category">
                    <label htmlFor="category">
                        Show movies from category:&nbsp;
                        <select 
                            name="category" 
                            id="category" 
                            className="movie-categories" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((category) => (
                                <option key={category.id} value={category.value}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <article className='movie-container'>
                {movies.length > 0 
                    ? 
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} list='home' />
                    ))
                    :
                    <p>Loading...</p>
                }
                </article>
            </section>
        </main>
    );
    
};

export default PageHome;