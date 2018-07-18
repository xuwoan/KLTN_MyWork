import * as types from '../actionTypes';
export const fetchListTypeJob= (payload) => ({
  type: types.FETCH_LIST_TYPE_JOB_REQUEST,
  payload,
});
export const fetchListTypeJobSuccess = (result) => ({
  type: types.FETCH_LIST_TYPE_JOB_SUCCESS,
  result,
});
export const fetchListTypeJobFailed = (error) => ({
  type: types.FETCH_LIST_TYPE_JOB_FAILED,
  error,
});