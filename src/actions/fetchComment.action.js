import * as types from '../actionTypes';
export const fetchAddComment = (params) => ({
    type: types.FETCH_ADD_COMMENT_REQUEST,
    params,
});
export const fetchAddCommentSuccess = (result) => ({
    type: types.FETCH_ADD_COMMENT_SUCCESS,
    result,
});

export const fetchAddCommentFailed = (error) => ({
    type: types.FETCH_ADD_COMMENT_FAILED,
    error,
});

export const fetchGetComment = (params) => ({
    type: types.FETCH_GET_COMMENT_REQUEST,
    params,
});
export const fetchGetCommentSuccess = (result) => ({
    type: types.FETCH_GET_COMMENT_SUCCESS,
    result,
});

export const fetchGetCommentFailed = (error) => ({
    type: types.FETCH_GET_COMMENT_FAILED,
    error,
});