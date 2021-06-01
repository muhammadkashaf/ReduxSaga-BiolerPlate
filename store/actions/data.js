import { all, fork } from 'redux-saga/effects';
import { watchData } from './data';

export default function* rootSaga() {
    yield all([
        fork(watchData)
    ]);
};