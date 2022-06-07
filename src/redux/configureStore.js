import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;