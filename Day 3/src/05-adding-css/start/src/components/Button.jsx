import '../styles/Button.css';
import PropTypes from 'prop-types';

function Button({ className = 'default', text, color, type }) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      style={{ backgroundColor: `${color}` }}
    >
      <span className="btn-text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
