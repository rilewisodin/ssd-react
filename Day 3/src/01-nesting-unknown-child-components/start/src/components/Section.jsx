import PorpTypes from 'prop-types';

function Section({ title, className, children }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PorpTypes.string.isRequired,
  className: PorpTypes.string,
  children: PorpTypes.node,
};

export default Section;
