import React from 'react';
import { useSelector } from 'react-redux';
import StartGamePage from './StartGamePage';
import GamePage from './GamePage';
import FetchingPage from './FetchingPage';
import EndGamePage from './EndGamePage';
import * as stages from '../utils/constant';

const MainPage = () => {
    const currentStage = useSelector(state => state.gameReducer.stage);
    let displayPage;
    switch(currentStage) {
        case stages.START_GAME:
            displayPage = <StartGamePage />
            break;
        case stages.FETCHING_GAME:
            displayPage = <FetchingPage />
            break;
        case stages.GAME:
            displayPage = <GamePage />
            break;
        case stages.END_GAME:
            displayPage = <EndGamePage />
            break;
        default: 
            displayPage = <StartGamePage />
            break;
    };

    return (
        <div className="font-mono bg-purple-50 min-h-screen">
            <h1 className="bg-purple-500 text-2xl text-white p-4 text-center uppercase">Redux Saga Mini Project (Quiz Game)</h1>
            {displayPage}
        </div>
    )
}

export default MainPage;
