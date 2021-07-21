import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors(state => state.todoReducer);

const todoSlice = createSlice({
    name: 'todo',
    initialState: todoAdapter.getInitialState({
        deletedTodo: []
    }),
    reducers: {
        addTodo: todoAdapter.addOne,
        addTodos: todoAdapter.addMany,
        deleteTodo: (state, action) => {
            state.deletedTodo.push(state.entities[action.payload]);
            todoAdapter.removeOne(state, action);
        },
        clearTodos: todoAdapter.removeAll,
        updateTodo: todoAdapter.updateOne,
        restoreTodo: (state, action) =>{
            todoAdapter.addOne(state,action);
            state.deletedTodo = state.deletedTodo.filter((item) => item.id !== action.payload.id);
        }
    },
});

export const {addTodo, addTodos, deleteTodo, clearTodos, updateTodo, restoreTodo} = todoSlice.actions;

export default todoSlice.reducer;