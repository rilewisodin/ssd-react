// Footer

import { getYear } from "../utilities/getDates";

const Footer = ({ copyright = getYear(), author = "Awesome Corp." }) => (
  <footer>
    <p>
      &copy; {copyright} {author}
    </p>
  </footer>
);

export default Footer;
