// Page - Contact
import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageContact = () => {
  useEffect(() => {
    document.title = `${appTitle} - Contact`;
  }, []);

  return (
    <main>
      <section>
        <h2>Contact Me</h2>
        <p>
          Email me at:{" "}
          <a href="mailTo:randy@randygulak.com">randy@randygulak.com</a>
        </p>
      </section>
    </main>
  );
};

export default PageContact;
