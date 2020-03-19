import React, { useState, useContext } from 'react';
import Book from './Book';
import { BooksContext } from './BooksContext';

const BookList = () => {
    //const value is derived from value in BooksContext
    const [books, setBooks] = useContext(BooksContext);

    return (
        <div>
            {books.map(book => (
                <Book name={book.name} price={book.price} key={book.id} />
            ))}
        </div>
    );
};

export default BookList;