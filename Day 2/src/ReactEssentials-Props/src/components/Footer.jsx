import { getYear } from '../utilities/dates';
import PropTypes from 'prop-types';

function Footer({ copyright = getYear(), author = 'Unknown' }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {author}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  copyright: PropTypes.number,
  author: PropTypes.string,
};

export default Footer;
