import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {

  stateType: null,
 
  data: {}

};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_DATA_NOTIFICATION:
      console.log("NOTIFICATION 1", action.params)
      return {
        ...state,
        stateType: action.params.type,
        data: action.params.data

      };
    
    case type.REFRESH_DATA_NOTIFICATION: {

      return {
        ...state,
        stateType: null,
       
        data: {}
      }
    }

    default:
      return state;
  }

}
