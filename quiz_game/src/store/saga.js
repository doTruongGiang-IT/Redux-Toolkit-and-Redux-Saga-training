import {all} from 'redux-saga/effects';
import startGameSaga from './saga/gameInit';
import gameSaga from './saga/game';

export default function* rootSaga() {
    yield all([startGameSaga(), gameSaga()]);
};