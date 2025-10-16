import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";

function PageContact() {
  useEffect(() => {
    document.title = `${appTitle} - Contact`;
  }, []);

  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        Email us at:{" "}
        <a href="mailto:randy@randygulak.com">randy@randygulak.com</a>
      </p>
    </section>
  );
}

export default PageContact;
