import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';
import {

  ToastAndroid,

} from 'react-native';
import {
  AsyncStorage,
} from 'react-native';
import * as selectors from '../selectors';
import { getdatafromapi, postdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import { setItem } from '../utils/storage';

import  AppConstants  from '../constants/application.constants';
function* fetchRegister(action) {
  try {

    let response = yield call(postdatafromapi, AppConstants.URL+"/user", action.params);
    // yield wait(1500);

    yield console.log("REGISTER FROM SAGA", response);

    yield put(actions.fetchRegisterSuccess(response));
    if (response.success !== undefined) {
      
        ToastAndroid.show(response.message, 50);
    }
    else { console.log("UNDE"); }
  
    //await AsyncStorage.setItem('mytoken',response.token);
  }catch(error) {
  console.log(error)
}
}

function* watchFetchRegister() {
  yield takeLatest(types.FETCH_REGISTER_REQUEST, fetchRegister);
}

export default watchFetchRegister;