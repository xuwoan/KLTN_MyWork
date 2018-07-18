import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi ,postdatafromapi} from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';

import  AppConstants  from '../constants/application.constants';

function* fetchListRecruiment(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/recruiment/getallpost", {})
    console.log("RECRUIMENT",response)
    yield put(actions.listRecruimentSuccess(response))
  }catch(error){
    console.log(error);
  }
}

export function* watchFetchListRecruiment() {
  yield takeLatest(types.FETCH_LIST_RECRUIMENT_REQUEST, fetchListRecruiment);
}


 function* fetchFilterRecruiment(data){
  try{
    console.log("come")
    let response = yield call(postdatafromapi,AppConstants.URL+"/recruiment/filterallpost", data.params)
    console.log("FILTER RECRUIMENT IN SAGA",response)
    yield put(actions.fetchFilterRecruimentSuccess(response))
  }catch(error){
    console.log(error);
  }
}

export function* watchFetchFilterRecruiment() {
  yield takeLatest(types.FETCH_FILTER_RECRUIMENT_REQUEST, fetchFilterRecruiment);
}
function* fetchDetailRecruiment(data){
  try{
    console.log("come detail")
    let response = yield call(postdatafromapi,AppConstants.URL+"/recruiment", data.params)
    console.log("DETAIL RECRUIMENT IN SAGA",response)
    yield put(actions.fetchDetailRecruimentSuccess(response))
  }catch(error){
    console.log(error);
  }
}

export function* watchFetchDetailRecruiment() {
  yield takeLatest(types.FETCH_DETAIL_RECRUIMENT_REQUEST, fetchDetailRecruiment);
}