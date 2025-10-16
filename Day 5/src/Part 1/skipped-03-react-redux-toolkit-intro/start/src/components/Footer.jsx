import { getYear } from "../utilities/getDates";

const Footer = ({ copyright = getYear(), author = "Awesome Corp." }) => (
  <footer>
    <p>
      &copy; {copyright} {author}
    </p>
    <p>
      This app is based on a demo found at:{" "}
      <a href="https://redux-toolkit.js.org/tutorials/quick-start">
        Redux Toolkit Quick Start
      </a>
    </p>
  </footer>
);

export default Footer;
