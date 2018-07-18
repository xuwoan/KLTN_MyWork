import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoadingRegister: false,
  isErrorRegister: false,
  message:{},
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_REGISTER_REQUEST:
      return {
        ...state,
        isLoadingRegister: true,
      };
    case type.FETCH_REGISTER_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("REGIS IN REDUCER", action.result)
      return {
        ...state,
        message: action.result,
  
        isErrorRegister: false,
      }
    }
    case type.FETCH_REGISTER_FAILED:
      return {
        ...state,
    
        isErrorRegister: true,
      }
   default:
            return state;
  }
   
}
