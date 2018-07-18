import * as types from '../actionTypes';
export const fetchListExperience= (payload) => ({
  type: types.FETCH_LIST_EXPERIENCE_REQUEST,
  payload,
});
export const fetchListExperienceSuccess = (result) => ({
  type: types.FETCH_LIST_EXPERIENCE_SUCCESS,
  result,
});
export const fetchListExperienceFailed = (error) => ({
  type: types.FETCH_LIST_DEPARTMENT_FAILED,
  error,
});