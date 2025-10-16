import PropTypes from 'prop-types';

function Section({ title, className, children }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
