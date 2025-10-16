import { getYear } from "../utilities/getDates";

const Footer = ({
  copyright = getYear(),
  author = "Level Up Vintage Games",
}) => (
  <footer>
    <p>
      &copy; {copyright} {author}
    </p>
  </footer>
);

export default Footer;
