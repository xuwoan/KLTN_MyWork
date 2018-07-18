import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  
  isError: false,
  datajob:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_JOB_REQUEST:
      return {
        ...state,
        
      };
    case type.FETCH_LIST_JOB_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
     // console.log("LOG job ", action.result)
      return {
        ...state,
        datajob: action.result,
       
        isError: false,
      }
    }
    case type.FETCH_LIST_JOB_FAILED:
      return {
        ...state,
        
        isError: true,
      }
   default:
            return state;
  }
   
}
