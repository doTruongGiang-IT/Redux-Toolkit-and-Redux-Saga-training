import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTodos, todoSelector, restoreTodo } from '../../store/slices/todoSlices';
import Todo from './Todo';

const TodoList = () => {
    const dispatch = useDispatch();
    const todoEntities = useSelector(todoSelector.selectEntities);
    const deletedTodo = useSelector(state => state.todoReducer.deletedTodo);
    const todoList = [];
    for(let id in todoEntities) {
        if(Object.hasOwnProperty.call(todoEntities, id)) {
            const todoItem = todoEntities[id];
            todoList.push(<Todo key={todoItem.id} id={todoItem.id} todo={todoItem.todo} isComplete={todoItem.isComplete} />);
        };
    };

    let clearAllTodo = () => {
        dispatch(clearTodos());
    };

    let restore = (todo) => {
        dispatch(restoreTodo(todo));
    };

    let deletedList = deletedTodo.map((todo, index) => {
        return <div className="deleted-todo" key={index}>
                    <span>{todo.todo}</span>
                    <button onClick={() => restore(todo)}>Restore</button>
                </div>
    });

    return (
        <div className="todo-list">
            <h3>Your todo list</h3>
            <button className="delete-btn" onClick={clearAllTodo}>Clear all</button>
            <div>{todoList}</div>
            <h3>Deleted Todo</h3>
            <div>{deletedList}</div>
        </div>
    )
}

export default TodoList;
