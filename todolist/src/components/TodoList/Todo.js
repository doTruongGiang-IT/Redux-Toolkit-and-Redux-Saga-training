import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/slices/todoSlices';

const Todo = ({id, todo, isComplete}) => {
    const dispatch = useDispatch();

    let toggle = () => {
        dispatch(updateTodo({
            id,
            changes: {isComplete: !isComplete}
        }));
    };

    let deleteItem = () => {    
        dispatch(deleteTodo(id));
    };

    return (
        <div className="todo">
            <input type="checkbox" value={isComplete} onChange={toggle} />
            <span>{todo}</span>
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default Todo;
