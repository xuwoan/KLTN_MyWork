import * as types from '../actionTypes';
export const fetchSettingNotification = (params) => ({
    type: types.FETCH_SETTING_NOTIFICATION_REQUEST,
    params,
});
export const fetchSettingNotificationSuccess = (result) => ({
    type: types.FETCH_SETTING_NOTIFICATION_SUCCESS,
    result,
});

export const fetchSettingNotificationFailed = (error) => ({
    type: types.FETCH_SETTING_NOTIFICATION_FAILED,
    error,
});