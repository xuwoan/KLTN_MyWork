import * as types from '../actionTypes';
export const ListGender= (payload) => ({
  type: types.FETCH_LIST_GENDER_REQUEST,
  payload,
});
export const ListGenderSuccess = (result) => ({
  type: types.FETCH_LIST_GENDER_SUCCESS,
  result,
});
export const ListGendereFailed = (error) => ({
  type: types.FETCH_LIST_GENDER_FAILED,
  error,
});