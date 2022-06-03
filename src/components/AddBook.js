import React from 'react';

const AddBook = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <label htmlFor="title">
      Book title:
      <input id="title" type="text" className="title" />
    </label>
    <label htmlFor="author">
      author:
      <input id="author" type="text" className="author" />
    </label>
  </form>
);

export default AddBook;