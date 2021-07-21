import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { cancelGame } from '../store/slices/gameInit';

const FetchingPage = () => {
    const dispatch = useDispatch();

    let cancelQuiz = () => {
        dispatch(cancelGame());
    };

    return (
        <div className="flex flex-col justify-center items-center mt-80">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center mb-12">
                <div className="w-12 h-12 bg-purple-200 rounded-full animate-bounce"></div>
            </div>
            {/* <button onClick={() => cancelQuiz()}>Cancel</button> */}
            <Button children="Cancel" onClick={cancelQuiz} />
        </div>
    )
}

export default FetchingPage;
