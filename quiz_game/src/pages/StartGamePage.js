import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../store/slices/gameInit';
import Button from '../components/Button';

const StartGamePage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    let startGameHandler = () => {
        dispatch(startGame(username));
    };

    return (
        <div className="flex flex-col justify-center items-center mt-80">
            <input className="px-4 py-2 outline-none rounded-xl shadow-lg mb-6" value={username} onChange={e => setUsername(e.target.value)} placeholder="Your name ..." />
            {/* <button onClick={startGameHandler}>Start game</button> */}
            <Button children="Start game" onClick={startGameHandler} type="" />
        </div>
    )
}

export default StartGamePage;
