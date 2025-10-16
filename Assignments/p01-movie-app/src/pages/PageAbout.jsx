import { useEffect } from 'react';

import { appTitle } from '../globals/globals';

const PageAbout = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <main>
      <section>
        <article className='about-container'>
          <div>
            <h3>About Movie Discovery</h3>
            <div>
              <p><span className='card-title'>Movie Discovery</span> is a one-stop shop for movies.</p>
              <p>The <span className='card-title'>Home page</span> shows a list of movies, 
                governed by the category dropdown, which includes&nbsp; 
                <span className='card-title'>Popular</span>,&nbsp;
                <span className='card-title'>Top Rated</span>,&nbsp;
                <span className='card-title'>Now Playing</span>,&nbsp;
                and <span className='card-title'>Upcoming</span>.</p>
              <p>Movies can be added to, or removed from, the&nbsp; 
                <span className='card-title'>Favourite / Watch List</span> at any time.</p>
              <p>All movie details are sourced from&nbsp;<span className='card-title'>TMDB</span>.</p>
            </div>
          </div>
        </article>
        <article className='about-container'>
          <div>
            <h3>About TMDB</h3>
            <div>This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
            <div>
              <img src="/public/images/TMDB-logo.svg" alt="TMDB logo" className='logo-small clickable' 
                onClick={() => window.open("https://developer.themoviedb.org/docs/getting-started", "_blank")} />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PageAbout;
