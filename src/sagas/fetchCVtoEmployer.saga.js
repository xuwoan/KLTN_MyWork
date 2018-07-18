import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi,postdatafromapi } from '../utils/request';
import { ToastAndroid } from 'react-native';
import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';



function* fetchNumCVtoEmployer(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/cvte/getcvtoemployer",  data.params)
    console.log("NUM CV TO E from saga",response)
    yield put(actions.fetchNumCVtoEmployerSuccess(response))
  }catch(error){

  }
}

export function* watchfetchNumCVtoEmployer() {
  yield takeLatest(types.FETCH_NUM_CV_TO_EMPLOYER_REQUEST, fetchNumCVtoEmployer);
}
// --------------------------------------------------------
function* fetchListCVtoEmployer(data){
    try{
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/cvte/getcvinrecruiment",  data.params)
      console.log("CVTE LIST from saga",response)
      yield put(actions.fetchListCVtoEmployerSuccess(response.message))
    }catch(error){
  
    }
  }
  
  export function* watchfetchListCVtoEmployer() {
    yield takeLatest(types.FETCH_LIST_CV_TO_EMPLOYER_REQUEST, fetchListCVtoEmployer);
  }
// ------------------------------------------------------------------

  function* fetchAddCVtoEmployer(data){
    try{
      
      let response = yield call(postdatafromapi,AppConstants.URL+"/cvte/createcvte",  data.params)
      console.log("ADD CV TO E from saga",response)
      ToastAndroid.show("Sending your CV to Employer successfull",50)
      yield put(actions.fetchAddCVtoEmployerSuccess(response))
    }catch(error){
      console.log(error)
      ToastAndroid.show("Sending your CV to Employer failed",50)
    }
  }
  
  export function* watchfetchAddCVtoEmployer() {
    yield takeLatest(types.FETCH_ADD_CV_USER_TO_EMPLOYER_REQUEST, fetchAddCVtoEmployer);
  }
//-------------------------------------------------------------------------
function* fetchRemoveCVtoEmployer(data){
    try{
      
      let response = yield call(postdatafromapi,AppConstants.URL+"/cvte/deactivecv",  data.params)
      console.log("REMOVE CVTE from saga",response)
      yield put(actions.fetchRemoveCVtoEmployerSuccess(response))
    }catch(error){
  
    }
  }
  
  export function* watchfetchRemoveCVtoEmployer() {
    yield takeLatest(types.FETCH_REMOVE_CV_TO_EMPLOYER_REQUEST, fetchRemoveCVtoEmployer);
  }
//-------------------------------------------------------------------------
  function* fetchcheckUserCVTE(data){
    try{
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/cvte/checkuser",  data.params)
      console.log("CHECK U CVTE from saga",response)
      yield put(actions.fetchCheckUserCVTESuccess(response))
    }catch(error){
  
    }
  }
  
  export function* watchfetchcheckUserCVTE() {
    yield takeLatest(types.FETCH_CHECK_USER_CVTE_REQUEST, fetchcheckUserCVTE);
  }
//-------------------------------------------------------------------------
function* fetchDetailDataCVTE(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/cvte/getdetailcv",  data.params)
    console.log("CHECK U CVTE from saga",response)
    yield put(actions.fetchDetailDataCVTESuccess(response))
  }catch(error){

  }
}

export function* watchfetchDetailDataCVTE() {
  yield takeLatest(types.FETCH_DETAIL_DATA_CVTE_REQUEST, fetchDetailDataCVTE);
}
