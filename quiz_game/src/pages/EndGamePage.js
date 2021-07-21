import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../store/slices/gameInit';
import Button from '../components/Button';

const EndGamePage = () => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.quizReducer.answers);
    const score = useSelector(state => state.quizReducer.score);
    let restartHandler = () => {
        dispatch(restartGame());
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-purple-500 my-4">Game Over</h1>
            <p className="text-2xl mb-4 ">Your Score: {score}/10</p>
            <Button children="Restart Game" onClick={restartHandler} />
            {/* <button onClick={restartHandler}>Restart Game</button> */}
            <div className="mt-4 p-4">
            {
                answers.map((answer, index) => {
                    return <div key={index} className="border-b-2 border-purple-500 flex justify-between bg-white">
                                <p className="p-2 mr-2" dangerouslySetInnerHTML={{__html: answer.question}}></p>
                                <span className={`p-2 ${answer.correctAnswer === answer.answer ? 'text-green-500' : 'text-red-500'}`}>{answer.answer}</span>
                            </div>
                })
            }
            </div>
        </div>
    )
}

export default EndGamePage;
