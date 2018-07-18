import * as types from '../actionTypes';
export const fetchActiveCVPublic = (params) => ({
    type: types.FETCH_ACTIVE_CVPUBLIC_REQUEST,
    params,
});
export const fetchActiveCVPublicSuccess = (result) => ({
    type: types.FETCH_ACTIVE_CVPUBLIC_SUCCESS,
    result,
});

export const fetchActiveCVPublicFailed = (error) => ({
    type: types.FETCH_ACTIVE_CVPUBLIC_FAILED,
    error,
});

export const fetchUserCVPublic = (params) => ({
    type: types.FETCH_USER_CVPUBLIC_REQUEST,
    params,
});
export const fetchUserCVPublicSuccess = (result) => ({
    type: types.FETCH_USER_CVPUBLIC_SUCCESS,
    result,
});

export const fetchUserCVPublicFailed = (error) => ({
    type: types.FETCH_USER_CVPUBLIC_FAILED,
    error,
});
//-------------------------------------------------------------------------
export const fetchListCVPublic = (params) => ({
    type: types.FETCH_LIST_CVPUBLIC_REQUEST,
    params,
});
export const fetchListCVPublicSuccess = (result) => ({
    type: types.FETCH_LIST_CVPUBLIC_SUCCESS,
    result,
});

export const fetchListCVPublicFailed = (error) => ({
    type: types.FETCH_LIST_CVPUBLIC_FAILED,
    error,
});


//-------------------------------------------------------------------------
export const fetchListQueryDepartment = (params) => ({
    type: types.FETCH_LIST_QUERY_DEPARTMENT_REQUEST,
    params,
});
export const fetchListQueryDepartmentSuccess = (result) => ({
    type: types.FETCH_LIST_QUERY_DEPARTMENT_SUCCESS,
    result,
});

export const fetchListQueryDepartmentFailed = (error) => ({
    type: types.FETCH_LIST_QUERY_DEPARTMENT_FAILED,
    error,
});

