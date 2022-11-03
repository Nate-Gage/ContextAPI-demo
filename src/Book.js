import React from "react";

const Book = (props) => {
  return (
    <div>
      <h3>
        {props.name}, <span className="bookPrice">$ {props.price}</span>
      </h3>
      <button
        onClick={() => {
          props.removeBook(props.book.name);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Book;
