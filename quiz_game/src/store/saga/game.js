import { take, race, delay, put } from "redux-saga/effects";
import { fetchingGameSuccess, answerQuestion, nextQuestion } from "../slices/game";
import {finishGame} from '../slices/gameInit';

function* answerSaga() {
    for(let i = 0; i < 10; i++) {
        yield take(answerQuestion.toString());
        yield put(nextQuestion());
    }
};

export default function* gameSaga() {
    while(true) {
        yield take(fetchingGameSuccess.toString());
        yield race({
            delay: delay(60000),
            done: answerSaga()
        });
        yield put(finishGame());
    };
};