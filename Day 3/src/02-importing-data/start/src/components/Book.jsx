import PropTypes from 'prop-types';

function Book({ cover, title, author, published, rating }) {
  return (
    <div className="book">
      <div className="book-cover">
        <img src={cover} alt={title} />
      </div>
      <div className="book-info">
        <ul>
          <li>
            <b>Title: </b>
            {title}
          </li>
          <li>
            <b>Author: </b>
            {author}
          </li>
          <li>
            <b>Published: </b>
            {published}
          </li>
          <li>
            <b>Rating: </b>
            {rating}
          </li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Book;
