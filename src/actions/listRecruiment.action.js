import * as types from '../actionTypes';
export const listRecruiment= (payload) => ({
  type: types.FETCH_LIST_RECRUIMENT_REQUEST,
  payload,
});
export const listRecruimentSuccess = (result) => ({
  type: types.FETCH_LIST_RECRUIMENT_SUCCESS,
  result,
});
export const listRecruimentFailed = (error) => ({
  type: types.FETCH_LIST_RECRUIMENT_FAILED,
  error,
});
export const fetchFilterRecruiment= (params) => ({

  type: types.FETCH_FILTER_RECRUIMENT_REQUEST,
  params,
});
export const fetchFilterRecruimentSuccess = (result) => ({
  type: types.FETCH_FILTER_RECRUIMENT_SUCCESS,
  result,
});
export const fetchFilterRecruimentFailed = (error) => ({
  type: types.FETCH_FILTER_RECRUIMENT_FAILED,
  error,
});
export const fetchDetailRecruiment= (params) => ({
  
    type: types.FETCH_DETAIL_RECRUIMENT_REQUEST,
    params,
  });
  export const fetchDetailRecruimentSuccess = (result) => ({
    type: types.FETCH_DETAIL_RECRUIMENT_SUCCESS,
    result,
  });
  export const fetchDetailRecruimentFailed = (error) => ({
    type: types.FETCH_DETAIL_RECRUIMENT_FAILED,
    error,
  });
