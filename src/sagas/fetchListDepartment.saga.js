import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi } from '../utils/request';

import Config from 'react-native-config';

import  AppConstants  from '../constants/application.constants';


function* fetchListDepartment(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/department/all", {})
    console.log("DEPARTMENT from saga",response)
    yield put(actions.fetchListDepartmentSuccess(response))
  }catch(error){

  }
}

 function* watchFetchListDepartment() {
  yield takeLatest(types.FETCH_LIST_DEPARTMENT_REQUEST, fetchListDepartment);
}

export default watchFetchListDepartment;