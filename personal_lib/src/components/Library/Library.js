import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteBook } from '../../store/slices/bookSlice';

const Library = () => {
    const books = useSelector(state => state.bookSlice.books);
    const dispatch = useDispatch();
    const bookTable = books.map((book, index) => {
        return <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.rating}</td>
                    <td><button type="button" className="delete" onClick={() => deleteBookHandler(book.id)}>X</button></td>
                </tr>
    });
    const deleteBookHandler = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <div className="library">
            <h2>Library</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookTable}
                </tbody>
            </table>
        </div>
    )
}

export default Library;
