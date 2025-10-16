// import { getYear } from '../utilities/dates';

// function Footer() {
//   return (
//     <footer>
//         <p>&copy; { getYear() } Josh Solomon</p>
//     </footer>
//   )
// }

// export default Footer

import { getYear } from "../utilities/dates";

function Footer({ copyright, author }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {author}
      </p>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: getYear(),
  author: "Unknown",
};

export default Footer;
