import * as types from '../actionTypes';


export const fetchListCV = (params) => ({
    type: types.FETCH_LIST_CV_USER_REQUEST,
    params,
});
export const fetchListCVSuccess = (result) => ({
    type: types.FETCH_LIST_CV_USER_SUCCESS,
    result,
});
export const fetchListCVFailed = (error) => ({
    type: types.FETCH_LIST_CV_USER_FAILED,
    error,
});
//-----------------------------------------------------

export const fetchDetailCV = (params) => ({

    type: types.FETCH_DETAIL_CV_USER_REQUEST,
    params,
});
export const fetchDetailCVSuccess = (result) => ({
    type: types.FETCH_DETAIL_CV_USER_SUCCESS,
    result,
});
export const fetchDetailCVFailed = (error) => ({
    type: types.FETCH_DETAIL_CV_USER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchAddCVUser = (params) => ({
    type: types.FETCH_ADD_CV_USER_REQUEST,
    params,
});
export const fetchAddCVUserSuccess = (result) => ({
    type: types.FETCH_ADD_CV_USER_SUCCESS,
    result,
});

export const fetchAddCVUserFailed = (error) => ({
    type: types.FETCH_ADD_CV_USER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchRemoveCVUser = (params) => ({
    type: types.FETCH_REMOVE_CV_USER_REQUEST,
    params,
});
export const fetchRemoveCVUserSuccess = (result) => ({
    type: types.FETCH_REMOVE_CV_USER_SUCCESS,
    result,
});

export const fetchRemoveCVUserFailed = (error) => ({
    type: types.FETCH_REMOVE_CV_USER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchUpdateCVUser = (params) => ({
    type: types.FETCH_UPDATE_CV_USER_REQUEST,
    params,
});
export const fetchUpdateCVUserSuccess = (result) => ({
    type: types.FETCH_UPDATE_CV_USER_SUCCESS,
    result,
});

export const fetchUpdateCVUserFailed = (error) => ({
    type: types.FETCH_UPDATE_CV_USER_FAILED,
    error,
});
//----------------------------------------------------
export const fetchNumCVtoEmployer = (params) => ({
    type: types.FETCH_NUM_CV_TO_EMPLOYER_REQUEST,
    params,
});
export const fetchNumCVtoEmployerSuccess = (result) => ({
    type: types.FETCH_NUM_CV_TO_EMPLOYER_SUCCESS,
    result,
});

export const fetchNumCVtoEmployerFailed = (error) => ({
    type: types.FETCH_NUM_CV_TO_EMPLOYER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchListCVtoEmployer = (params) => ({
    type: types.FETCH_LIST_CV_TO_EMPLOYER_REQUEST,
    params,
});
export const fetchListCVtoEmployerSuccess = (result) => ({
    type: types.FETCH_LIST_CV_TO_EMPLOYER_SUCCESS,
    result,
});

export const fetchListCVtoEmployerFailed = (error) => ({
    type: types.FETCH_LIST_CV_TO_EMPLOYER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchAddCVtoEmployer = (params) => ({
    type: types.FETCH_ADD_CV_USER_TO_EMPLOYER_REQUEST,
    params,
});
export const fetchAddCVtoEmployerSuccess = (result) => ({
    type: types.FETCH_ADD_CV_USER_TO_EMPLOYER_SUCCESS,
    result,
});

export const fetchAddCVtoEmployerFailed = (error) => ({
    type: types.FETCH_ADD_CV_USER_TO_EMPLOYER_FAILED,
    error,
});

//----------------------------------------------------

export const fetchRemoveCVtoEmployer = (params) => ({
    type: types.FETCH_REMOVE_CV_TO_EMPLOYER_REQUEST,
    params,
});
export const fetchRemoveCVtoEmployerSuccess = (result) => ({
    type: types.FETCH_REMOVE_CV_TO_EMPLOYER_SUCCESS,
    result,
});

export const fetchRemoveCVtoEmployerFailed = (error) => ({
    type: types.FETCH_REMOVE_CV_TO_EMPLOYER_FAILED,
    error,
});
//----------------------------------------------------
export const fetchCheckUserCVTE = (params) => ({
    type: types.FETCH_CHECK_USER_CVTE_REQUEST,
    params,
});
export const fetchCheckUserCVTESuccess = (result) => ({
    type: types.FETCH_CHECK_USER_CVTE_SUCCESS,
    result,
});

export const fetchCheckUserCVTEFailed = (error) => ({
    type: types.FETCH_CHECK_USER_CVTE_FAILED,
    error,
});
//------------------------------------------------------
export const fetchDetailDataCVTE = (params) => ({
    type: types.FETCH_DETAIL_DATA_CVTE_REQUEST,
    params,
});
export const fetchDetailDataCVTESuccess = (result) => ({
    type: types.FETCH_DETAIL_DATA_CVTE_SUCCESS,
    result,
});

export const fetchDetailDataCVTEFailed = (error) => ({
    type: types.FETCH_DETAIL_DATA_CVTE_FAILED,
    error,
});

export const resetState = (state) => ({
    type: types.RESET_STATE_CV,
    state,
});




