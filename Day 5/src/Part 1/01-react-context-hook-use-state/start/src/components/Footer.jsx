import { getYear } from '../utilities/getDates';
import PropTypes from 'prop-types';

const Footer = ({ copyright = getYear(), author = 'Awesome Corp' }) => (
  <footer>
    <p>
      &copy; {copyright} {author}
    </p>
  </footer>
);

Footer.propTypes = {
  copyright: PropTypes.number,
  author: PropTypes.string,
};

export default Footer;
