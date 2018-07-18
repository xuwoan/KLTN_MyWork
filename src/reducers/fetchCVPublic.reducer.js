import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {

    isLoadingListCV: false,
    isLoadingListDep: false,
    isLoadingNextListDep: false,
    isError: false,
    listcvpublic: [],
    listdepartment: [],
    usercvpublic: {},
    isupdated: false,
    amountCV:0,
    cvaldready:1

};

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_ACTIVE_CVPUBLIC_REQUEST:

            return {
                ...state,
                isupdated: false,
            };
        case type.FETCH_ACTIVE_CVPUBLIC_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("AC CV job ", action.result)
            return {
                ...state,
                isupdated: true,
                isError: false,
            }
        }
        case type.FETCH_ACTIVE_CVPUBLIC_FAILED:
            return {
                ...state,
                isupdated: false,
                isError: true,
            }
        //----------------------------------------------------------
        case type.FETCH_USER_CVPUBLIC_REQUEST:

            return {
                ...state,

            };
        case type.FETCH_USER_CVPUBLIC_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("AC CV job ", action.result)
            return {
                ...state,
                usercvpublic: action.result.message,
                cvaldready:action.result.cv,
                isError: false,
            }
        }
        case type.FETCH_USER_CVPUBLIC_FAILED:
            return {
                ...state,
                isError: true,
            }
        //----------------------------------------------------------
        case type.FETCH_LIST_CVPUBLIC_REQUEST:
            if(action.params.firstrequest===true)
            {
            return {
                ...state,
                isLoadingListCV: true,
              

            };
        }
        else{
            return {
                ...state,
                isLoadingNextListCV: true,
               
            };
            
        }
        case type.FETCH_LIST_CVPUBLIC_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("AC CV job ", action.result)
            return {
                ...state,
                listcvpublic: action.result.message,
                amountCV:action.result.amount,
                isError: false,
                isLoadingListCV: false,
                isLoadingNextListCV : false
            }
        }
        case type.FETCH_LIST_CVPUBLIC_FAILED:
            return {
                ...state,
                isError: true,
                isLoadingListCV: false,
                isLoadingNextListCV:false
            }
        //----------------------------------------------------------
        case type.FETCH_LIST_QUERY_DEPARTMENT_REQUEST:

            return {
                ...state,
                isLoadingListDep: true

            };
        case type.FETCH_LIST_QUERY_DEPARTMENT_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("LIST DEP job ", action.result)
            return {
                ...state,
                listdepartment: action.result,
                isError: false,
                isLoadingListDep: false
            }
        }
        case type.FETCH_LIST_QUERY_DEPARTMENT_FAILED:
            return {
                ...state,
                isError: true,
                isLoadingListDep: false
            }

        default:
            return state;
    }

}
