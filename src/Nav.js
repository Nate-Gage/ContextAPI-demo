import React, { useContext } from 'react';
import { MovieContext, BooksContext } from './BooksContext';

const Nav = () => {
    const [books, setBooks] = useContext(BooksContext);

    return (
        <div className="nav">
            <h3>List of Books: {books.length}</h3>
        </div>
    );
};

export default Nav;