import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    books: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // addBook: (state, action) => {
        //     state.books.push(action.payload);
        // },
        addBook: {
            reducer: (state, action) => {
                state.books.push(action.payload);
            },
            prepare: (value) => {
                return {
                    payload: {id: nanoid(10), ...value, date: new Date()}
                }
            }
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        }
    },
});

export const {addBook, deleteBook} = bookSlice.actions;

export default bookSlice.reducer;