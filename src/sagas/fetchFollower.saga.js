import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi, postdatafromapi } from '../utils/request';

import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';




function* fetchFollower(data){
  try{
    
    let response = yield call(postdatafromapi,AppConstants.URL+"/follower/follow", data.params)
    console.log("ANALYSIS from saga",response)
    yield put(actions.fetchFollowerSuccess(response.success))
  }catch(error){
    console.log("ANALYSIS from saga",error)
    yield put(actions.fetchFollowerFailed())
  }
}

 function* watchFetchFollower() {
  yield takeLatest(types.FETCH_FOLLOWER_REQUEST, fetchFollower);
}

export default watchFetchFollower;