import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getRequest, postRequest } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';



function* fetchListGender(data){
  try{
    
    // let response = yield call(getRequest,Config.API_URL + "api/news/detail", { alias : 'gender'})
    // console.log("news_id response",response)
    // yield put(actions.fetchListGender(response))
  }catch(error){

  }
}

 function* watchFetchGender() {
  yield takeLatest(types.FETCH_LIST_GENDER_REQUEST, fetchListGender);
}

export default watchFetchGender;