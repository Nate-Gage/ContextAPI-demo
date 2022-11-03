import React, { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "./BooksContext";

const BookList = () => {
  //const value is derived from value in BooksContext
  const [books, setBooks] = useContext(BooksContext);

  const removeBook = (name) => {
    setBooks(books.filter((book) => book.name !== name));
  };

  // the Book component needs the individual book={book} prop in order to
  // delete related item from list
  return (
    <div>
      {books.map((book) => (
        <Book
          book={book}
          name={book.name}
          price={book.price}
          key={book.id}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
};

export default BookList;
