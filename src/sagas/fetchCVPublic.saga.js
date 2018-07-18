import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi, postdatafromapi } from '../utils/request';
import { ToastAndroid } from 'react-native';
import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';



function* fetchActiveCvPublic(data){
  try{
    
    let response = yield call(postdatafromapi,AppConstants.URL+"/cvpublic/activecv", data.params)
    console.log("ACTIVER CV from saga",response)
    if(response.success)
    yield put(actions.fetchActiveCVPublicSuccess(response.success))
    else{
      ToastAndroid.show(response.message,50);
      yield put(actions.fetchActiveCVPublicFailed())
    }
  
  }catch(error){
    console.log("error",error)
    yield put(actions.fetchActiveCVPublicFailed())

  }
}


export function* watchfetchActiveCvPublic() {
  yield takeLatest(types.FETCH_ACTIVE_CVPUBLIC_REQUEST, fetchActiveCvPublic);
}

function* fetchUserCvPublic(data){
    try{
      console.log(data.params)
      let response = yield call(getdatafromapi,AppConstants.URL+"/cvpublic/getinfo", data.params)
      console.log("USER CV from saga",response)
      yield put(actions.fetchUserCVPublicSuccess(response))
    }catch(error){
      console.log("error",error)
      yield put(actions.fetchUserCVPublicFailed())
  
    }
  }
  
  
  export function* watchfetchUserCvPublic() {
    yield takeLatest(types.FETCH_USER_CVPUBLIC_REQUEST, fetchUserCvPublic);
  }

  function* fetchListCvPublic(data){
    try{
      
      let response = yield call(postdatafromapi,AppConstants.URL+"/cvpublic/getcv", data.params)
      console.log("LIST CV from saga",response)
      yield put(actions.fetchListCVPublicSuccess(response))
    }catch(error){
      console.log("error",error)
      yield put(actions.fetchListCVPublicFailed())
  
    }
  }
  
  
  export function* watchfetchListCvPublic() {
    yield takeLatest(types.FETCH_LIST_CVPUBLIC_REQUEST, fetchListCvPublic);
  }

  function* fetchListQueryDepartment(data){
    try{
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/cvpublic/getdepartment", data.params)
      console.log("QUERY DEP from saga",response)
      yield put(actions.fetchListQueryDepartmentSuccess(response.message))
    }catch(error){
      console.log("error",error)
      yield put(actions.fetchListQueryDepartmentFailed())
  
    }
  }
  
  
  export function* watchfetchListQueryDepartment() {
    yield takeLatest(types.FETCH_LIST_QUERY_DEPARTMENT_REQUEST, fetchListQueryDepartment);
  }