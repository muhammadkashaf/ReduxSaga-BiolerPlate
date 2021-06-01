import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  CLEAN_STATE
} from './types';

const getPosts = payload => ({ type: POST_REQUEST, payload });

const postSuccess = payload => ({ type: POST_SUCCESS, payload });

const postFailure = payload => ({ type: POST_FAILURE, payload });

const getUsers = payload => ({ type: USER_REQUEST, payload });

const userSuccess = payload => ({ type: USER_SUCCESS, payload });

const userFailure = payload => ({ type: USER_FAILURE, payload });

const getComments = payload => ({ type: COMMENT_REQUEST, payload });

const commentSuccess = payload => ({ type: COMMENT_SUCCESS, payload });

const commentFailure = payload => ({ type: COMMENT_FAILURE, payload });

const cleanState = _ => ({ type: CLEAN_STATE });

export {
  getPosts,
  postSuccess,
  postFailure,
  getUsers,
  userSuccess,
  userFailure,
  getComments,
  commentSuccess,
  commentFailure,
  cleanState
}