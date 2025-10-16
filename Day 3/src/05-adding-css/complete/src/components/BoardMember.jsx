import styles from '../styles/BoardMember.module.css';
import PropTypes from 'prop-types';

function BoardMember({ name, position, image, imagePath = '/assets/images/' }) {
  return (
    <div
      className={`${styles.boardMember} ${
        position === 'Chairman' && styles.special
      }`}
    >
      <div className={styles.profilePicture}>
        <img
          src={`${imagePath}${image}`}
          alt={`${position} of the Kitten's Group Inc. - ${name}`}
        />
      </div>
      <div className={styles.titleAndName}>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Position: </b>
          {position}
        </p>
      </div>
    </div>
  );
}

BoardMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
};

export default BoardMember;
