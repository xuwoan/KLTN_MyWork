import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';
import {
  AsyncStorage,
} from 'react-native';
import * as selectors from '../selectors';
import { delay } from 'redux-saga';
import { getRequest, postRequest, getdatafromapi, postuserfromapi, postdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import { setItem ,getItem} from '../utils/storage';

import {

  ToastAndroid,

} from 'react-native';
import AppConstants from '../constants/application.constants';

function* fetchUserInfo(action) {
  try {
    var player_id;
    yield getItem("playerid").then((keyValue) => {
      //   console.log("My Token",keyValue) //Display key value
      player_id = keyValue
    }, (error) => {
      console.log(error) //Display error
    });
    let response = yield call(postuserfromapi, AppConstants.URL + "/account", action.params);


    yield console.log("NO", response);


    if (response.token !== undefined) {
      setItem("mytoken", response.token);


      ToastAndroid.show("Đăng nhập thành công", 50)
      yield put(actions.UserInfoSuccess(response.array));
      let userid = null;
      if (response.array.type === 1 && player_id !== response.array.detailemployer.setting.player_id) { userid = response.array.userid }
      else if (response.array.type === 0 && player_id !== response.array.detailcandidate.setting.player_id) {
        userid = response.array.userid
      }
      console.log("SSSSS",userid,player_id)
      if (userid !== null) {
        console.log("dif")
        yield call(postdatafromapi, AppConstants.URL + "/user/updateplayerid", { userid: userid, player_id: player_id });
      }
    }
    else {
      //   console.log("Fds")


      yield put(actions.UserInfoFailed());
      //  console.log("nonono")
      ToastAndroid.show(response.array, 50)
    }

    //await AsyncStorage.setItem('mytoken',response.token);
  } catch (error) {
    console.log(error)
  }
}

export function* watchFetchUserInfo() {
  yield takeLatest(types.FETCH_USER_INFO_REQUEST, fetchUserInfo);
}


function* fetchCompanyInfo(action) {
  try {
    let response = yield call(postdatafromapi, AppConstants.URL + "/user/getinfocompany", action.params);

      yield put(actions.fetchCompanyInfoSuccess(response.message));

  } catch (error) {
    console.log(error)
    yield put(actions.fetchCompanyInfoFailed());
  }
}

export function* watchFetchCompanyInfo() {
  yield takeLatest(types.FETCH_COMPANY_INFO_REQUEST, fetchCompanyInfo);
}

function* fetchLogout(action) {
  try {
     yield call(postdatafromapi, AppConstants.URL + "/user/updateplayerid", { userid: action.params.userid, player_id: null });

     

  } catch (error) {
    console.log(error)
   
  }
}

export function* watchFetchLogout() {
  yield takeLatest(types.LOG_OUT, fetchLogout);
}

function* fetchUpdateUser(action) {
  try {

    let response = yield call(postdatafromapi, AppConstants.URL + "/user/update", action.params);
    // yield wait(1500);

    yield console.log("NO", response);
    if (response.success === true) {

      ToastAndroid.show("Update thông tin thành công", 50)
      yield put(actions.fetchUpdateUserSuccess(response.message));
    }
    else {
      ToastAndroid.show(response.message, 50)
    }

    //await AsyncStorage.setItem('mytoken',response.token);
  } catch (error) {
    console.log(error)
  }
}

export function* watchFetchUpdateUser() {
  yield takeLatest(types.FETCH_UPDATE_USER_REQUEST, fetchUpdateUser);
}