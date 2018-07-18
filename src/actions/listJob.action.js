import * as types from '../actionTypes';
export const ListJob= (payload) => ({
  type: types.FETCH_LIST_JOB_REQUEST,
  payload,
});
export const ListJobSuccess = (result) => ({
  type: types.FETCH_LIST_JOB_SUCCESS,
  result,
});
export const ListJobFailed = (error) => ({
  type: types.FETCH_LIST_JOB_FAILED,
  error,
});