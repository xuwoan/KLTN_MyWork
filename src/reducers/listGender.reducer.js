import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isError: false,
  data:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_GENDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_LIST_GENDER_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
     // console.log("LOGGGGGGG", action.result.data)
      return {
        ...state,
        data: action.result.data.description,
        isLoading: false,
        isError: false,
      }
    }
    case type.FETCH_LIST_GENDER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
   default:
            return state;
  }
   
}
