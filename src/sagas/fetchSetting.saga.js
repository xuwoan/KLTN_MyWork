import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi,postdatafromapi } from '../utils/request';
import { ToastAndroid } from 'react-native';
import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';



function* fetchSettingNotification(data){
  try{
    
    let response = yield call(postdatafromapi,AppConstants.URL+"/setting/enable",  data.params)
    console.log("SETTING from saga",response)
    yield put(actions.fetchSettingNotificationSuccess(response.success))
  }catch(error){
    console.log("ERROR",error)
    yield put(actions.fetchSettingNotificationFailed())
  }
}

export function* watchfetchSettingNotification() {
  yield takeLatest(types.FETCH_SETTING_NOTIFICATION_REQUEST, fetchSettingNotification);
}