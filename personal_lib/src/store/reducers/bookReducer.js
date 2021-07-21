import {createReducer} from '@reduxjs/toolkit';
import { addBook, deleteBook } from '../actions/bookActions';

const initialState = {
    books: [],
};

const bookReducer = createReducer(initialState, (builder) => {
    builder.addCase(addBook, (state, action) => {
        state.books.push(action.payload);
    });
    builder.addCase(deleteBook, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
    });
});

export default bookReducer;