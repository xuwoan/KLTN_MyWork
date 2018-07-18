import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi ,postdatafromapi} from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';

import  AppConstants  from '../constants/application.constants';

function* fetchAllNews1(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/news/getlistnews", data.params)
    console.log("ALL NEWS IN SAGA ",response)
    yield put(actions.fetchAllNewsSuccess1(response))
  }catch(error){
    yield put(actions.fetchAllNewsFailed1(response))
    console.log(error);
  }
}

export function* watchfetchAllNews1() {
  yield takeLatest(types.FETCH_ALL_NEWS1_REQUEST, fetchAllNews1);
}
function* fetchAllNews2(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/news/getlistnews", data.params)
    console.log("ALL NEWS IN SAGA ",response)
    yield put(actions.fetchAllNewsSuccess2(response))
  }catch(error){
    yield put(actions.fetchAllNewsFailed2(response))
    console.log(error);
  }
}

export function* watchfetchAllNews2() {
  yield takeLatest(types.FETCH_ALL_NEWS2_REQUEST, fetchAllNews2);
}


function* fetchDetailNews(data){
  try{
    console.log("come detail")
    let response = yield call(getdatafromapi,AppConstants.URL+"/news/getnews", data.params)
    console.log("DETAIL NEWS IN SAGA",response)
    yield put(actions.fetchDetailNewsSuccess(response.message))
  }catch(error){
    console.log(error);
  }
}

export function* watchfetchDetailNews() {
  yield takeLatest(types.FETCH_DETAIL_NEWS_REQUEST, fetchDetailNews);
}