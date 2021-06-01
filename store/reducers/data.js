import {
  POST_SUCCESS,
  POST_FAILURE,
  USER_SUCCESS,
  USER_FAILURE,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  CLEAN_STATE
} from '../actions/types';

const initialState = {
  posts: [],
  users: [],
  comments: [],
  error: null
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        error: null
      };
    }
    case POST_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        error: null
      };
    }
    case USER_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case COMMENT_SUCCESS: {
      return {
        ...state,
        comments: action.payload,
        error: null
      };
    }
    case COMMENT_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case CLEAN_STATE: {
      return {
        posts: [],
        users: [],
        comments: [],
        error: null
      };
    }
    default:
      return state;
  }
};

export default data;
