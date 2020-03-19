import React from 'react';

const Book = (props) => {

    return (
        <div>
            <h3>{props.name}, <span className="bookPrice">$ {props.price}</span></h3>
        </div>
    );
};

export default Book;