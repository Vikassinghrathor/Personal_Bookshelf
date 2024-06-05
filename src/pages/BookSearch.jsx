import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookSearch = () => {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (query.length > 1) {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await response.json();
      setBooks(data.docs);
    }
  };

  const addToBookShelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

    const isBookAlreadyAdded = bookshelf.some(
      (savedBook) => savedBook.key === book.key
    );

    if(!isBookAlreadyAdded){
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }else{
      alert('This book is already in your bookshelf!');
    }
  };

  const goToBookShelf = () => {
    navigate("/bookshelf");
  };

  return (
    <>
      <div className="booksearch">
        <div className="search">
          <span>Search By Book Name :</span>
          <input
            type="search"
            className="book-search-input"
            value={query}
            onChange={handleSearch}
          />
        </div>
        <div className="response">
          {books.map((book) => (
            <div key={book.key} className="book__card">
              <h1>{book.title}</h1>
              <button onClick={() => addToBookShelf(book)} className="btn-card">
                Add to BookShelf
              </button>
            </div>
          ))}
        </div>
        <div className="shelf">
        <input
          type="button"
          value="My Bookshelf"
          className="b-shelf"
          onClick={goToBookShelf}
        />
        </div>
      </div>
    </>
  );
};

export default BookSearch;
