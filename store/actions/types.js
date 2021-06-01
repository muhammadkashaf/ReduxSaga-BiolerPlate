import { takeLatest, put, call } from 'redux-saga/effects';
import { POST_REQUEST, USER_REQUEST, COMMENT_REQUEST } from '../actions/types';
import { postSuccess, postFailure, userSuccess, userFailure, commentSuccess, commentFailure } from '../actions/data';

// TODO
function* postSaga({ payload }) {
    try {
        const dataJSON = yield call(fetch, [`https://jsonplaceholder.typicode.com/posts`]);
        const data = yield call(_ => dataJSON.json());
        yield put(postSuccess(data))
    }
    catch (error) {
        yield put(postFailure(error))
    }
}

function* userSaga({ payload }) {
    try {
        const dataJSON = yield call(fetch, [`https://jsonplaceholder.typicode.com/users`]);
        const data = yield call(_ => dataJSON.json());
        yield put(userSuccess(data))
    }
    catch (error) {
        yield put(userFailure(error))
    }
}

function* commentSaga({ payload: { postId } }) {
    try {
        const dataJSON = yield call(fetch, [`https://jsonplaceholder.typicode.com/posts/${postId}/comments`]);
        const data = yield call(_ => dataJSON.json());
        yield put(commentSuccess(data))
    }
    catch (error) {
        yield put(commentFailure(error))
    }
}

function* watchData() {
    yield takeLatest(POST_REQUEST, postSaga);
    yield takeLatest(USER_REQUEST, userSaga);
    yield takeLatest(COMMENT_REQUEST, commentSaga);
};

export {
    watchData
}