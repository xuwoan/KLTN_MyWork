import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getRequest, postRequest,getdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';
import  AppConstants  from '../constants/application.constants';


function* fetchListTypeJob(data){
  try{
    console.log("asasa");
    let response = yield call(getdatafromapi,AppConstants.URL+"/typejob/all", {})
    console.log("typejob in saga",response)
    yield put(actions.fetchListTypeJobSuccess(response))
  }catch(error){

  }
}

 function* watchFetchListTypeJob() {
  yield takeLatest(types.FETCH_LIST_TYPE_JOB_REQUEST, fetchListTypeJob);
}

export default watchFetchListTypeJob;