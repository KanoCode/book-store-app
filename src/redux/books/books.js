// widgets.js

// Actions
const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';

// Reducer
export default function reducer(
  state = [
    { id: 1, author: 'Kano', title: 'bakugan' },
    { id: 1, author: 'Napoleon Hill', title: 'Think and Grow Rich' },
    { id: 1, author: 'Suzanne Collins', title: 'The Hunger Games' },
    { id: 3, author: 'Naruto', title: 'Shipudden' },
  ],
  action,
) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action Creators
export function addBook(id, title, author) {
  return {
    type: ADD_BOOK,
    book: {
      id,
      title,
      author,
    },
  };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}
