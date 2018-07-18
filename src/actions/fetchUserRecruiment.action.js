import * as types from '../actionTypes';
export const fetchAddRecruiment = (params) => ({
    type: types.FETCH_ADD_RECRUIMENT_REQUEST,
    params,
});
export const fetchAddRecruimentSuccess = (result) => ({
    type: types.FETCH_ADD_RECRUIMENT_SUCCESS,
    result,
});
export const fetchAddRecruimentFailed = (error) => ({
    type: types.FETCH_ADD_RECRUIMENT_FAILED,
    error,
});
//
export const fetchUserRecruiment = (params) => ({
    type: types.FETCH_USER_RECRUIMENT_REQUEST,
    params,
});
export const fetchUserRecruimentSuccess = (result) => ({
    type: types.FETCH_USER_RECRUIMENT_SUCCESS,
    result,
});
export const fetchUserRecruimentFailed = (error) => ({
    type: types.FETCH_USER_RECRUIMENT_FAILED,
    error,
});
//
export const resetResultAddRecruiment = (param) => ({
    type: types.RESET_RESULT_ADD_RECRUIMENT,
    param,
});
//
export const fetchDeleteRecruiment = (params) => ({
    type: types.FETCH_DELETE_RECRUIMENT_REQUEST,
    params,
});
export const fetchDeleteRecruimentSuccess = (result) => ({
    type: types.FETCH_DELETE_RECRUIMENT_SUCCESS,
    result,
});
export const fetchDeleteRecruimentFailed = (error) => ({
    type: types.FETCH_DELETE_RECRUIMENT_FAILED,
    error,
});
//
export const resetResultDeleteRecruiment = (param) => ({
    type: types.RESET_RESULT_DELETE_RECRUIMENT,
    param,
});
//

export const fetchUserDetailRecruiment = (params) => ({
    type: types.FETCH_USER_DETAIL_RECRUIMENT_REQUEST,
    params,
});
export const fetchUserDetailRecruimentSuccess = (result) => ({
    type: types.FETCH_USER_DETAIL_RECRUIMENT_SUCCESS,
    result,
});
export const fetchUserDetailRecruimentFailed = (error) => ({
    type: types.FETCH_USER_DETAIL_RECRUIMENT_FAILED,
    error,
});

export const fetchUpdateRecruiment = (params) => ({
    type: types.FETCH_UPDATE_RECRUIMENT_REQUEST,
    params,
});
export const fetchUpdateRecruimentSuccess = (result) => ({
    type: types.FETCH_UPDATE_RECRUIMENT_SUCCESS,
    result,
});
export const fetchUpdateRecruimentFailed = (error) => ({
    type: types.FETCH_UPDATE_RECRUIMENT_FAILED,
    error,
});
export const resetResultUpdateRecruiment = (params) => ({
    type: types.RESET_RESULT_UPDATE_RECRUIMENT,
    params,
});


