import PropTypes from 'prop-types';

function Rename({ handleRename }) {
  function renameYourApp() {
    let newAppName = prompt('Enter a name for your application...');

    if (newAppName !== null) {
      newAppName = newAppName.trim();
    }

    while (newAppName === null || newAppName === '') {
      newAppName = prompt('Invalid app name. Please enter a valid app name...');
      if (newAppName !== null) {
        newAppName = newAppName.trim();
      }
    }

    handleRename(newAppName);
  }

  return (
    <div>
      <p>Click the button below to rename your React App.</p>
      <button onClick={renameYourApp}>Rename Your App</button>
    </div>
  );
}

Rename.propTypes = {
  handleRename: PropTypes.func.isRequired,
};

export default Rename;
