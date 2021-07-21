import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "./slices/todoSlices";

const store = configureStore({
    reducer: {
        todoReducer: todoSlices
    },
});

export default store;