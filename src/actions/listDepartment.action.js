import * as types from '../actionTypes';
export const fetchListDepartment= (payload) => ({
  type: types.FETCH_LIST_DEPARTMENT_REQUEST,
  payload,
});
export const fetchListDepartmentSuccess = (result) => ({
  type: types.FETCH_LIST_DEPARTMENT_SUCCESS,
  result,
});
export const fetchListDepartmentFailed = (error) => ({
  type: types.FETCH_LIST_DEPARTMENT_FAILED,
  error,
});
