import * as types from '../actionTypes';
export const UserInfo= (params) => ({
  type: types.FETCH_USER_INFO_REQUEST,
  params,
});
export const UserInfoSuccess = (result) => ({
  type: types.FETCH_USER_INFO_SUCCESS,
  result,
});
export const UserInfoFailed = (error) => ({
  type: types.FETCH_USER_INFO_FAILED,
  error,
});

export const fetchUpdateUser= (params) => ({
  type: types.FETCH_UPDATE_USER_REQUEST,
  params,
});
export const fetchUpdateUserSuccess = (result) => ({
  type: types.FETCH_UPDATE_USER_SUCCESS,
  result,
});
export const fetchUpdateUserFailed = (error) => ({
  type: types.FETCH_UPDATE_USER_FAILED,
  error,
});

export const reretLoginState = (params) => ({
  type: types.RESET_LOGIN_STATE,
  params,
});

export const fetchCompanyInfo= (params) => ({
  type: types.FETCH_COMPANY_INFO_REQUEST,
  params,
});
export const fetchCompanyInfoSuccess = (result) => ({
  type: types.FETCH_COMPANY_INFO_SUCCESS,
  result,
});
export const fetchCompanyInfoFailed = (error) => ({
  type: types.FETCH_COMPANY_INFO_FAILED,
  error,
});

