import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../store/slices/todoSlices';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const submitForm = () => {
        if(text.length > 0) {
            let items = text.split(',');
            dispatch(addTodos(
                items.map((item) => ({
                    id: nanoid(),
                    todo: item,
                    isComplete: false
                }))
            ));
        };
        setText("");
    };

    return (
        <div className="add-todo">
            <p>To add multiple items, write them with comma separated</p>
            <p><i>eg: Eggs, Cheese, Pizza, Coca</i></p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={submitForm}>Add Todo</button>
        </div>
    )
}

export default AddTodo;
