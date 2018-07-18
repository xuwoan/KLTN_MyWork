import * as types from '../actionTypes';
export const fetchDataNotification = (params) => ({
    type: types.FETCH_DATA_NOTIFICATION,
    params,
});

export const refreshDataNotification = (params) => ({
    type: types.REFRESH_DATA_NOTIFICATION,
    params,
});
