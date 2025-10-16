import PropTypes from 'prop-types';

function Main({ heading, quote }) {
  return (
    <main>
      <section>
        <h2>{heading}</h2>
        <p>{quote}</p>
      </section>
    </main>
  );
}

Main.propTypes = {
  heading: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Main;
