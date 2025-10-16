/* eslint-disable react/prop-types */
import { getYear } from './utilities/dates.js';

const Footer = ({ copyright = getYear(), author = 'Unknown' }) => {
  return (
    <footer>
      <p>
        &copy; {copyright} {author}
      </p>
    </footer>
  );
};

export default Footer;
