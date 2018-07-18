import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi, postdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';
import {
  ToastAndroid,
} from 'react-native';
import AppConstants from '../constants/application.constants';

function* fetchAddRecruiment(data) {
  try {

    let response = yield call(postdatafromapi, AppConstants.URL + "/post/createpost", data.params)
    console.log("RECRUIMENT", response)
    if (response.success === true) {
      ToastAndroid.show(response.message, 50)
      yield put(actions.fetchAddRecruimentSuccess(response.success))
    } else ToastAndroid.show(response.message, 50)
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchAddRecruiment() {
  yield takeLatest(types.FETCH_ADD_RECRUIMENT_REQUEST, fetchAddRecruiment);
}


function* fetchUserRecruiment(data) {
  try {
    console.log("come")
    let response = yield call(getdatafromapi, AppConstants.URL + "/recruiment/getuserpost", data.params)
    console.log("USER RECRUIMENT IN SAGA", response)

    yield put(actions.fetchUserRecruimentSuccess(response))
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUserRecruiment() {
  yield takeLatest(types.FETCH_USER_RECRUIMENT_REQUEST, fetchUserRecruiment);
}
function* fetchDeleteRecruiment(data) {
  try {
    console.log("come")
    let response = yield call(postdatafromapi, AppConstants.URL + "/post/deletepost", data.params)
    console.log("DELETE RECRUIMENT IN SAGA", response)
    if (response.success === true) {

      ToastAndroid.show(response.message, 50)
      yield put(actions.fetchDeleteRecruimentSuccess(response))
    } else ToastAndroid.show(response.message, 50)
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchDeleteRecruiment() {
  yield takeLatest(types.FETCH_DELETE_RECRUIMENT_REQUEST, fetchDeleteRecruiment);
}

function* fetchUserDetailRecruiment(data) {
  try {
    console.log("come")
    let response = yield call(getdatafromapi, AppConstants.URL + "/post/getdetailpost", data.params)
    console.log("USER DETAIL RECRUIMENT IN SAGA", response)
    if (response.success === true) {

     
      yield put(actions.fetchUserDetailRecruimentSuccess(response))
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUserDetailRecruiment() {
  yield takeLatest(types.FETCH_USER_DETAIL_RECRUIMENT_REQUEST, fetchUserDetailRecruiment);
}

function* fetchUpdateRecruiment(data) {
  try {
    console.log("come")
    let response = yield call(postdatafromapi, AppConstants.URL + "/post/updatepost", data.params)
    console.log("USER DETAIL RECRUIMENT IN SAGA", response)
    if (response.success === true) {

     
      yield put(actions.fetchUpdateRecruimentSuccess(response.success))
    } else ToastAndroid.show("Update Recruiment Failed !!", 50)
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateDetailRecruiment() {
  yield takeLatest(types.FETCH_UPDATE_RECRUIMENT_REQUEST, fetchUpdateRecruiment);
}