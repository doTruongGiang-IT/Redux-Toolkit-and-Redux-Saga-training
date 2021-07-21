import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './saga';
import gameReducer from './slices/gameInit';
import quizReducer from './slices/game';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        gameReducer,
        quizReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleWare)
});

sagaMiddleWare.run(rootSaga);

export default store;