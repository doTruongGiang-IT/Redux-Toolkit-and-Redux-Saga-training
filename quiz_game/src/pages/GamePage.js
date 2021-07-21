import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {answerQuestion} from '../store/slices/game';
import {finishGame} from '../store/slices/gameInit';
import Button from '../components/Button';

const GamePage = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.quizReducer.questions[state.quizReducer.currentQuestionIndex].question);
    const score = useSelector(state => state.quizReducer.score);
    const currentQuestionIndex = useSelector(state => state.quizReducer.currentQuestionIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    let answerHandler = (answer) => {
        dispatch(answerQuestion(answer));
    };

    let exitHandler = () => {
        dispatch(finishGame());
    };

    return (
        <div className="flex flex-col items-center relative">
            <p className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-2xl">{timeLeft}</p>
            <p className="absolute top-4 left-4 text-xl text-purple-500">{score}</p>
            <p className="absolute top-4 right-4 text-xl text-purple-500">{currentQuestionIndex}/10</p>
            <p className="p-7 bg-white rounded-lg shadow-xl"
                dangerouslySetInnerHTML={{__html: currentQuestion}}></p>
            <div className="flex justify-between mt-8 w-96">
                <Button children="True" onClick={() => answerHandler("True")} />
                <Button children="False" onClick={() => answerHandler("False")} />
                {/* <button onClick={() => answerHandler("True")}>True</button>
                <button onClick={() => answerHandler("False")}>False</button> */}
            </div>
            <Button children="Exit Game" type="error" onClick={exitHandler} addClassNames="mt-4" />
            {/* <button onClick={exitHandler}>Exit Game</button> */}
        </div>
    )
}

export default GamePage;
