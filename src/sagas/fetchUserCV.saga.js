import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi ,postdatafromapi} from '../utils/request';
import { ToastAndroid } from 'react-native';
import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';



function* fetchDetailCV(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/cv/getdetailcv",  data.params)
    console.log("CV DETAIL from saga",response)
    yield put(actions.fetchDetailCVSuccess(response))
 
  }catch(error){
    console.log(error)
  }
}

export function* watchfetchDetailCV() {
  yield takeLatest(types.FETCH_DETAIL_CV_USER_REQUEST, fetchDetailCV);
}
// --------------------------------------------------------
function* fetchListCVUser(data){
    try{
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/cv/getusercv",  data.params)
      console.log("CV LIST from saga",response)
      yield put(actions.fetchListCVSuccess(response.message))
   
    }catch(error){
      
    }
  }
  
  export function* watchfetchListCVUser() {
    yield takeLatest(types.FETCH_LIST_CV_USER_REQUEST, fetchListCVUser);
  }
// ------------------------------------------------------------------

  function* fetchUpdateCV(data){
    try{
      
      let response = yield call(postdatafromapi,AppConstants.URL+"/cv/updatecv",  data.params)
      console.log("UPDATE CV from saga",response)
      yield put(actions.fetchUpdateCVUserSuccess(response))
     
    }catch(error){
  
    }
  }
  
  export function* watchfetchUpdateCV() {
    yield takeLatest(types.FETCH_UPDATE_CV_USER_REQUEST, fetchUpdateCV);
  }
// ------------------------------------------------------------------

function* fetchAddCV(data){
    try{
      
      let response = yield call(postdatafromapi,AppConstants.URL+"/cv/createcv",  data.params)
      console.log("ADD CV from saga",response)
      yield put(actions.fetchAddCVUserSuccess(response))
      ToastAndroid.show("Tạo CV thành công",50) 
    }catch(error){
      ToastAndroid.show("Tạo CV thất bại",50) 
      console.log(error)
    }
  }
  
  export function* watchfetchAddCV() {
    yield takeLatest(types.FETCH_ADD_CV_USER_REQUEST, fetchAddCV);
  }
// ------------------------------------------------------------------

function* fetchRemoveCV(data){
    try{
      console.log(data.params)
      let response = yield call(postdatafromapi,AppConstants.URL+"/cv/deletecv",  data.params)
      console.log("DELETE from saga",response)
      ToastAndroid.show("Xóa CV thành công",50) 
      yield put(actions.fetchRemoveCVUserSuccess(response))
    }catch(error){
  
    }
  }
  
  export function* watchfetchRemoveCV() {
    yield takeLatest(types.FETCH_REMOVE_CV_USER_REQUEST, fetchRemoveCV);
  }
