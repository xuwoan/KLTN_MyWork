import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  
  isError: false,
  dataprovince:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_PROVINCE_REQUEST:
      return {
        ...state,
    
      };
    case type.FETCH_LIST_PROVINCE_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("LOG province", action.result)
      return {
        ...state,
        dataprovince: action.result,
      
        isError: false,
      }
    }
    case type.FETCH_LIST_PROVINCE_FAILED:
      return {
        ...state,
       
        isError: true,
      }
   default:
            return state;
  }
   
}
