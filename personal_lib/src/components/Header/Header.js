import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, logout } from '../../store/slices/authSlice';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="header">
            <h1>Personal Library</h1>
            <button type="button" className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
            <button type="button" className="user-btn" onClick={() => dispatch(fetchUser())}>Get user</button>
        </div>
    )
}

export default Header;
