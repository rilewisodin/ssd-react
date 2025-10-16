import PropTypes from 'prop-types';

function InputText({
  label,
  id,
  className,
  type = 'text',
  fullWidth = false,
  placeholder,
  value,
}) {
  return (
    <div className={`input-group input-text-group ${className}`}>
      <label htmlFor={id}>{label}: </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        style={{
          width: `${fullWidth && '100%'}`,
        }}
      />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
