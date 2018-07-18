import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {

    isError: false,
    isLoading: false,
    addingResult: false,
    listcomment: [],
};

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_ADD_COMMENT_REQUEST:

            return {
                ...state,
                isLoading:true,
                addingResult: false,
                

            };
        case type.FETCH_ADD_COMMENT_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("ADD comment  ", action.result)
            return {
                ...state,
                addingResult: action.result,
                addingResult: true,
                isError: false,
            }
        }
        case type.FETCH_ADD_COMMENT_FAILED:
            return {
                ...state,

                isError: true,
            }
        case type.FETCH_GET_COMMENT_REQUEST:

            return {
                ...state,
                isLoading:true,
              

            };
        case type.FETCH_GET_COMMENT_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("GET comment  ", action.result)
            return {
                ...state,
                listcomment: action.result,
               // addingResult:true,
                isError: false,
            }
        }
        case type.FETCH_GET_COMMENT_FAILED:
            return {
                ...state,

                isError: true,
              //  addingResult:false
            }
        default:
            return state;
    }

}
