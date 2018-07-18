import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getRequest, postRequest,getdatafromapi,getuserfromapi } from '../utils/request';
import Config from 'react-native-config';
import {getItem}  from '../utils/storage';
import  AppConstants from '../constants/application.constants';

function* fetchToken(action){
  try{
    var token;
    yield getItem("mytoken").then((keyValue) => {
        console.log("My Token",keyValue) //Display key value
        token = keyValue
    }, (error) => {
        console.log(error) //Display error
    });
    let response = yield call(getuserfromapi,AppConstants.URL+"/account",token);
   // yield wait(1500);
    yield console.log("NO","RESPONSE TOKEN",response);
    if (response.token !== undefined) {
      setItem("mytoken", response.token);
    }
    yield put(actions.UseTokenRequestSuccess(response));
    if(response.userid===undefined)
      yield put(actions.refreshDataNotification());
  }catch(error){
    console.log(error)
  }
}

 function* watchFetchUserToken() {
  yield takeLatest(types.FETCH_TOKEN_REQUEST, fetchToken);
}

export default watchFetchUserToken;