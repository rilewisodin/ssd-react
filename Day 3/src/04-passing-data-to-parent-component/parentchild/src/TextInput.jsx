import PropTypes from 'prop-types';

function TextInput({ title, setTitle }) {
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default TextInput;
