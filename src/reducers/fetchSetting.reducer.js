import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  
  isError: false,
  isLoading:false,
  success: false
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_SETTING_NOTIFICATION_REQUEST:
   
      return {
        ...state,
        isError: false,
        isLoading:true,
        success: false
        
      };
    case type.FETCH_SETTING_NOTIFICATION_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("SETTING reducer ", action.result)
      return {
        ...state,
        isError: false,
        isLoading:false,
        success : action.result
      }
    }
    case type.FETCH_SETTING_NOTIFICATION_FAILED:
      return {
        ...state,
        
        isError: true,
        isLoading:false,
        success: false
      }
   default:
            return state;
  }
   
}
