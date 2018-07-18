import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isError: false,
  datatypejob:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_TYPE_JOB_REQUEST:
      return {
        ...state,
        
      };
    case type.FETCH_LIST_TYPE_JOB_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
     // console.log("TYPE JOB IN REDUCER", action.result)
      return {
        ...state,
        datatypejob: action.result,
      
        isError: false,
      }
    }
    case type.FETCH_LIST_TYPE_JOB_FAILED:
      return {
        ...state,
      
        isError: true,
      }
   default:
            return state;
  }
   
}
