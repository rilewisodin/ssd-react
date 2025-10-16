// Page - Not Found

import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageNotFound = () => {
  // This needs to be refactored to use a Link component from react-router-dom

  useEffect(() => {
    document.title = `${appTitle} - Page Not Found`;
  }, []);

  return (
    <section className="page-not-found-section">
      <h2>404 ... : (</h2>
      <p>Page not found.</p>
      <p>
        Go to <a href="/">Home</a> page.
      </p>
    </section>
  );
};

export default PageNotFound;
