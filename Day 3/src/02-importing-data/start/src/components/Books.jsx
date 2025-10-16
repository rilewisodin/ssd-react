import bookList from '../data/bookList';
import Book from './Book';

function Books() {
  return (
    <div className="books-container">
      {bookList.map((bookData) => {
        return (
          <Book
            key={bookData.title}
            title={bookData.title}
            author={bookData.author}
            published={bookData.published}
            cover={bookData.cover}
            rating={bookData.rating}
          />
        );
      })}
    </div>
  );
}

export default Books;
