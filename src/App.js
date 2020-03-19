import React from 'react';
import './App.css';
import BookList from './BookList';
import Nav from './Nav';
import AddBook from './AddBook';
import { BookProvider } from './BooksContext';

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav />
        <AddBook />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
