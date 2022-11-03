import React, { useState,useContext } from 'react';
import {BooksContext} from './BooksContext';

const AddBook = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [books, setBooks] = useContext(BooksContext);

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };
    const updateId = (e) => {
        setId(e.target.value);
    };
    const addBook = (e) => {
        e.preventDefault();
        setBooks(books => [...books, { name: name, price: price }]);
    }

    return (
        <div>
            <h2>Add a Book</h2>
            <form onSubmit={addBook}>
                <p>Name</p>
                <input type="text" name="name" value={name} onChange={updateName} />
                <p>Price</p>
                <input type="text" name="price" value={price} onChange={updatePrice} />
                <p>ID</p>
                <input type="text" name="id" value={id} onChange={updateId} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBook;