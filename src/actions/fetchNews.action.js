import * as types from '../actionTypes';
export const fetchAllNews1 = (params) => ({
    type: types.FETCH_ALL_NEWS1_REQUEST,
    params,
});
export const fetchAllNewsSuccess1 = (result) => ({
    type: types.FETCH_ALL_NEWS1_SUCCESS,
    result,
});
export const fetchAllNews2 = (params) => ({
    type: types.FETCH_ALL_NEWS2_REQUEST,
    params,
});
export const fetchAllNewsSuccess2 = (result) => ({
    type: types.FETCH_ALL_NEWS2_SUCCESS,
    result,
});

export const fetchAllNewsFailed1 = (error) => ({
    type: types.FETCH_ALL_NEWS1_FAILED,
    error,
});
export const fetchAllNewsFailed2 = (error) => ({
    type: types.FETCH_ALL_NEWS2_FAILED,
    error,
});
export const fetchDetailNews = (params) => ({

    type: types.FETCH_DETAIL_NEWS_REQUEST,
    params,
});
export const fetchDetailNewsSuccess = (result) => ({
    type: types.FETCH_DETAIL_NEWS_SUCCESS,
    result,
});
export const fetchDetailNewsFailed = (error) => ({
    type: types.FETCH_DETAIL_NEWS_FAILED,
    error,
});
