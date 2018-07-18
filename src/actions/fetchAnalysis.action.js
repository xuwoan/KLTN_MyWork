import * as types from '../actionTypes';
export const fetchDataAnalysis = (params) => ({
    type: types.FETCH_DATA_ANALYSIS_REQUEST,
    params,
});
export const fetchDataAnalysisSuccess = (result) => ({
    type: types.FETCH_DATA_ANALYSIS_SUCCESS,
    result,
});

export const fetchDataAnalysisFailed = (error) => ({
    type: types.FETCH_DATA_ANALYSIS_FAILED,
    error,
});