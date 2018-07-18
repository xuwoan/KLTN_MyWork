import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';

import  AppConstants from '../constants/application.constants';

function* fetchListProvince(data){
  try{
    
  
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/province/all", {})
      console.log("PROVINCE",response)
      yield put(actions.listProvinceSuccess(response))
    }catch(error){
      console.log(error);
    }
}

 function* watchFetchProvince() {
  yield takeLatest(types.FETCH_LIST_PROVINCE_REQUEST, fetchListProvince);
}

export default watchFetchProvince;