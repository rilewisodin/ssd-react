import bookList from "../data/bookList";
import Book from "./Book";

function Books() {
  return (
    <div className="books-container">
      {bookList.map((singleBook, i) => {
        return (
          <Book
            key={i}
            cover={singleBook.cover}
            title={singleBook.title}
            author={singleBook.author}
            published={singleBook.published}
            rating={singleBook.rating}
          />
        );
      })}
    </div>
  );
}

export default Books;
