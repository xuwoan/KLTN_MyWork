import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isError: false,
  listdepartment:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_DEPARTMENT_REQUEST:{
      console.log("COME IN");
      return {
        ...state,
        isLoading: true,
      };
    }
    case type.FETCH_LIST_DEPARTMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
     // console.log("DEPARTMENT IN REDUCER", action.result)
      return {
        ...state,
        listdepartment: action.result,
        isLoading: false,
        isError: false,
      }
    }
    case type.FETCH_LIST_DEPARTMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
   default:
            return state;
  }
   
}
