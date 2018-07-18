import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoadingAddRecruiment: false,
  isErrorAddRecruiment: false,
  isLoadingDeleteRecruiment: false,
  isErrorDeleteRecruiment: false,
  isLoadingDetailRecruiment: false,
  isErrorDetailRecruiment: false,
  listuserRecruiment: [],
  resultAdding: false,
  resultDeleting: false,
  detailRecruiment: {},
  resultUpdating:false,
  isLoadingUserRecruiment : false




};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_ADD_RECRUIMENT_REQUEST:
      return {
        ...state,
        isLoadingAddRecruiment: true,
      };
    case type.FETCH_ADD_RECRUIMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("ADD RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        resultAdding: action.result,
        isLoadingAddRecruiment: false,
        isErrorAddRecruiment: false,
      }
    }
    case type.FETCH_ADD_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingAddRecruiment: false,
        isErrorAddRecruiment: true,
      }
    case type.FETCH_USER_RECRUIMENT_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingUserRecruiment: true,
      };
    case type.FETCH_USER_RECRUIMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("USER RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        listuserRecruiment: action.result,
        isLoadingUserRecruiment: false,
        isErrorAddRecruiment: false,
      }
    }
    case type.FETCH_USER_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingUserRecruiment: false,
        isErrorAddRecruiment: true,
      }
    case type.RESET_RESULT_ADD_RECRUIMENT:
      console.log("Success replace")
      return {
        ...state,
        resultAdding: false,

      }
    case type.FETCH_DELETE_RECRUIMENT_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingDeleteRecruiment: true,
      };
    case type.FETCH_DELETE_RECRUIMENT_SUCCESS: {

      console.log("DELETING RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        resultDeleting: action.result,
        isLoadingDeleteRecruiment: false,
        isErrorDeleteRecruiment: false,
      }
    }
    case type.FETCH_DELETE_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingDeleteRecruiment: false,
        isErrorDeleteRecruiment: true,
      }
    case type.RESET_RESULT_DELETE_RECRUIMENT:
      console.log("Success replace")
      return {
        ...state,
        resultDeleting: false,

      }
    case type.FETCH_USER_DETAIL_RECRUIMENT_REQUEST:

      return {
        ...state,
        isLoadingDetailRecruiment: true,
      };
    case type.FETCH_USER_DETAIL_RECRUIMENT_SUCCESS: {

      console.log("DETAIL USER RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        detailRecruiment: action.result,

        isLoadingDetailRecruiment: false,
        isErrorDetailRecruiment: false,
      }
    }
    case type.FETCH_USER_DETAIL_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingDetailRecruiment: false,
        isErrorDetailRecruiment: true,
      }
    case type.RESET_RESULT_UPDATE_RECRUIMENT:
      console.log("RESET")
      return {
        ...state,
        resultUpdating: false
      };
      case type.FETCH_UPDATE_RECRUIMENT_REQUEST:
      
            return {
              ...state,
              
            };
    case type.FETCH_UPDATE_RECRUIMENT_SUCCESS: {

      console.log("UPDATE RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        resultUpdating: action.result,

       
      }
    }
    case type.FETCH_UPDATE_RECRUIMENT_FAILED:
      return {
        ...state,
        
      }
    default:

      return state;
  }

}
