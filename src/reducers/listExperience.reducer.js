import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isError: false,
  dataexp:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_EXPERIENCE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_LIST_EXPERIENCE_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
     // console.log("EXP IN REDUCER", action.result)
      return {
        ...state,
        dataexp: action.result,
  
        isError: false,
      }
    }
    case type.FETCH_LIST_EXPERIENCE_FAILED:
      return {
        ...state,
    
        isError: true,
      }
   default:
            return state;
  }
   
}
