import * as types from '../actionTypes';
export const UseTokenRequest= (params) => ({
  type: types.FETCH_TOKEN_REQUEST,
  params,
});
export const UseTokenRequestSuccess = (result) => ({
  type: types.FETCH_TOKEN_SUCCESS,
  result,
});
export const UseTokenRequestFailed = (error) => ({
  type: types.FETCH_TOKEN_FAILED,
  error,
});