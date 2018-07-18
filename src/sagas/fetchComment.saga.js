import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi, postdatafromapi } from '../utils/request';

import Config from 'react-native-config';
import AppConstants  from '../constants/application.constants';
import { fetchAddComment } from '../actions';



function* fetchaddComment(data){
  try{
    
    let response = yield call(postdatafromapi,AppConstants.URL+"/comment/createcmt", data.params)
    console.log("COMMENT ADD from saga",response)
    yield put(actions.fetchAddCommentSuccess(response.success))
  }catch(error){
      console.log(error)

  }
}

export function* watchfetchaddComment() {
  yield takeLatest(types.FETCH_ADD_COMMENT_REQUEST, fetchaddComment);
}

function* fetchgetComment(data){
    try{
      
      let response = yield call(getdatafromapi,AppConstants.URL+"/comment/getcmt", data.params)
      console.log("GET ADD from saga",response)
      yield put(actions.fetchGetCommentSuccess(response.message))
    }catch(error){
        console.log(error)
  
    }
  }
  
  export function* watchfetchgetComment() {
    yield takeLatest(types.FETCH_GET_COMMENT_REQUEST, fetchgetComment);
  }
  
