import * as types from '../actionTypes';
export const fetchFollower = (params) => ({
    type: types.FETCH_FOLLOWER_REQUEST,
    params,
});
export const fetchFollowerSuccess = (result) => ({
    type: types.FETCH_FOLLOWER_SUCCESS,
    result,
});

export const fetchFollowerFailed = (error) => ({
    type: types.FETCH_FOLLOWER_FAILED,
    error,
});