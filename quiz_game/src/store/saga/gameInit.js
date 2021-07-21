import {take, fork, call, put, delay, cancel} from 'redux-saga/effects';
import { fetchQuiz } from '../../utils/api';
import { fetchingGameFail, fetchingGameSuccess } from '../slices/game';
import { cancelGame, startGame } from '../slices/gameInit';

function* fetchQuestionSaga() {
    try {
        yield delay(1000);
        const questions = yield call(fetchQuiz);
        yield put(fetchingGameSuccess(questions));
    } catch (error) {
        yield put(fetchingGameFail(error.message));
    };
};

function* cancelQuiz(forkQuiz) {
    while(true) {
        yield take(cancelGame.toString());
        yield cancel(forkQuiz);
    }
};

export default function* startGameSaga() {
    while(true) {
        yield take(startGame.toString());
        const forkQuiz = yield fork(fetchQuestionSaga);
        yield fork(cancelQuiz, forkQuiz);
    };
};