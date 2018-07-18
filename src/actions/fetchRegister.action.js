import * as types from '../actionTypes';
export const fetchRegister= (params) => ({
  type: types.FETCH_REGISTER_REQUEST,
  params,
});
export const fetchRegisterSuccess = (result) => ({
  type: types.FETCH_REGISTER_SUCCESS,
  result,
});
export const fetchRegisterFailed = (error) => ({
  type: types.FETCH_REGISTER_FAILED,
  error,
});
