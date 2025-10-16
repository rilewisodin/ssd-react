import PropTypes from 'prop-types';

function Footer({
  author = 'Randy Gulak',
  creditsLabel = 'Credits',
  credit,
  creditText,
  imageCreditLabel = 'Image Credits',
  imageCredit = false,
}) {
  const d = new Date();
  const year = d.getFullYear();

  function displayCredits() {
    if (imageCredit === true) {
      if (creditText !== null) {
        return (
          <p>
            {imageCreditLabel}: <a href={credit}>{creditText}</a>
          </p>
        );
      } else {
        return (
          <p>
            {imageCreditLabel}: <a href={credit}>{credit}</a>
          </p>
        );
      }
    } else {
      if (creditText !== null) {
        return (
          <p>
            {creditsLabel}: <a href={credit}>{creditText}</a>
          </p>
        );
      } else {
        return (
          <p>
            {creditsLabel}: <a href={credit}>{credit}</a>
          </p>
        );
      }
    }
  }

  return (
    <footer>
      {credit !== null && displayCredits()}
      <p>
        &copy; {year} {author}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  author: PropTypes.string,
  creditsLabel: PropTypes.string,
  credit: PropTypes.string,
  creditText: PropTypes.string,
  imageCreditLabel: PropTypes.string,
  imageCredit: PropTypes.bool,
};

export default Footer;
