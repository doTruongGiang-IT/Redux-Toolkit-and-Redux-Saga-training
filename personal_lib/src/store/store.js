import {configureStore} from '@reduxjs/toolkit';
// import bookReducer from './reducers/bookReducer';
import bookSlice from './slices/bookSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
    reducer: {
        bookSlice,
        authSlice
    },
});

export default store;