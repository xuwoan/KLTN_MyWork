import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
    isLoadingCVtoEmployer: false,
    isErrorCVtoEmployer: false,
    stateAdding: false,
    stateDeleting: false,
    checkUser: true,
    dataNum: [],
    dataList: []
};

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_LIST_CV_TO_EMPLOYER_REQUEST:
            return {
                ...state,
                isLoadingCVtoEmployer: true,
            };
        case type.FETCH_LIST_CV_TO_EMPLOYER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                dataList: action.result,

                isErrorCVtoEmployer: false,
            }
        }
        case type.FETCH_LIST_CV_TO_EMPLOYER_FAILED:
            return {
                ...state,
                isErrorCVtoEmployer: true,
            }

        //-----------------------------------------------------------
        case type.FETCH_ADD_CV_USER_TO_EMPLOYER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true,
            };
        case type.FETCH_ADD_CV_USER_TO_EMPLOYER_SUCCESS: {

            console.log("ADD CVTE IN REDUCER", action.result)
            return {
                ...state,
                stateAdding: true,
            }
        }
        case type.FETCH_ADD_CV_USER_TO_EMPLOYER_FAILED:
            return {
                ...state,
                stateAdding: false,
            }
        //-----------------------------------------------------------
        case type.FETCH_REMOVE_CV_TO_EMPLOYER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true

            };
        case type.FETCH_REMOVE_CV_TO_EMPLOYER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                stateDeleting: true,

            }
        }
        case type.FETCH_REMOVE_CV_TO_EMPLOYER_FAILED:
            return {
                ...state,
                stateDeleting: false,

            }
        //-----------------------------------------------------------
        case type.FETCH_NUM_CV_TO_EMPLOYER_REQUEST:
            return {
                ...state,
                isLoadingCVtoEmployer: true,
            };
        case type.FETCH_NUM_CV_TO_EMPLOYER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                dataNum: action.result
            }
        }
        case type.FETCH_NUM_CV_TO_EMPLOYER_FAILED:
            return {
                ...state,
                isErrorCVtoEmployer: false,
            }
      
       
            
        //-----------------------------------------------------------
        case type.FETCH_CHECK_USER_CVTE_REQUEST:
            return {
                ...state,
                isLoadingCVtoEmployer: true,
            };
        case type.FETCH_CHECK_USER_CVTE_SUCCESS: {

            console.log("CHECK USER IN REDUCER", action.result)
            return {
                ...state,
                checkUser: action.result.message
            }
        }
        case type.FETCH_CHECK_USER_CVTE_FAILED:
            return {
                ...state,
                isErrorCVtoEmployer: false,
            }
        default:
            return state;
    }

}
