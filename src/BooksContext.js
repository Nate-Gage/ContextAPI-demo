import React, { useState, createContext } from "react";

//createContext has to be initialized outside of the component
export const BooksContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Willy Wonka",
      price: 10,
      id: 136389,
    },
    {
      name: "Dictionary",
      price: 15,
      id: 472857,
    },
    {
      name: "Bible",
      price: 20,
      id: 284766,
    },
  ]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
};
