import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi } from '../utils/request';

import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';



function* fetchDataAnalysis(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/gettopmajor", {})
    console.log("ANALYSIS from saga",response)
    yield put(actions.fetchDataAnalysisSuccess(response))
  }catch(error){

  }
}

 function* watchfetchDataAnalysis() {
  yield takeLatest(types.FETCH_DATA_ANALYSIS_REQUEST, fetchDataAnalysis);
}

export default watchfetchDataAnalysis;