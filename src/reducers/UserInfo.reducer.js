import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';
import { removeItem } from '../utils/storage';
const initialState = {
  isLoading: false,
  isLoadingToken: false,
  isError: false,
  user: {},
  loginstate: false,
  success: false,
  companyinfo: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_USER_INFO_SUCCESS: {
      console.log("LG", (action.result.userid === undefined))
      console.log("LOGGGGGGG", action.result)
      return {
        ...state,
        user: action.result,
        isLoading: false,
        isError: false,
        loginstate: !(action.result.userid === undefined)
      }
    }
    case type.FETCH_USER_INFO_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        loginstate: false
      }


    case type.FETCH_COMPANY_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_COMPANY_INFO_SUCCESS: {
      
      console.log("COMPANY INFO REDUCER", action.result)
      return {
        ...state,
        companyinfo: action.result,
        isLoading: false,
        isError: false,
       
      }
    }
    case type.FETCH_COMPANY_INFO_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
       
      }

    case type.FETCH_UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_UPDATE_USER_SUCCESS: {

      console.log("UPDATE IN REDUCER", action.result)
      return {
        ...state,
        user: action.result,
        isLoading: false,
        success: true,
        isError: false,

      }
    }
    case type.FETCH_UPDATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,

      }
    case type.FETCH_TOKEN_REQUEST:
      return {
        ...state,
        isLoadingToken: true,
      };

    case type.FETCH_TOKEN_SUCCESS: {

      console.log("LOGGGGGGG", action.result.userid)
      return {
        ...state,
        user: action.result,
        isLoadingToken: false,
        isError: false,
        loginstate: !(action.result.userid === undefined)

      }
    }
    case type.FETCH_TOKEN_FAILED:
      return {
        ...state,
        isLoadingToken: false,
        isError: true,
        loginstate: false
      }
    case type.LOG_OUT:
      try {
        console.log("Come");
        removeItem("mytoken");
        
        return {
          ...state,

          loginstate: false,
          user: {}
        }
      } catch (error) {

      }
    case type.RESET_LOGIN_STATE:
      return {
        ...state,
        loginstate: false
      };
    default:
      return state;
  }

}
