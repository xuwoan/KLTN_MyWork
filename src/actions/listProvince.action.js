import * as types from '../actionTypes';
export const listProvince= (payload) => ({
  type: types.FETCH_LIST_PROVINCE_REQUEST,
  payload,
});
export const listProvinceSuccess = (result) => ({
  type: types.FETCH_LIST_PROVINCE_SUCCESS,
  result,
});
export const listProvinceFailed = (error) => ({
  type: types.FETCH_LIST_PROVINCE_FAILED,
  error,
});