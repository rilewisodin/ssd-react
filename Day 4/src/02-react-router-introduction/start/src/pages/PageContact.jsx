// Page - Contact

import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageContact = () => {
  useEffect(() => {
    document.title = `${appTitle} - Contact`;
  }, []);

  return (
    <main id="contact">
      <h2>Contact Me</h2>
      <p>
        Email me at:{" "}
        <a href="mailTo:randy@randygulak.com">randy@randygulak.com</a>
      </p>
    </main>
  );
};

export default PageContact;
