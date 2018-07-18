import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';

import  AppConstants  from '../constants/application.constants';

function* fetchListJob(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/job/all", {})
    console.log("JOB",response)
    yield put(actions.ListJobSuccess(response))
  }catch(error){
    console.log(error);
  }
}

 function* watchFetchListJob() {
  yield takeLatest(types.FETCH_LIST_JOB_REQUEST, fetchListJob);
}

export default watchFetchListJob;