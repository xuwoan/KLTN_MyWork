import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
    isLoading: false,
    isError: false,
    result: false,
};

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_FOLLOWER_REQUEST:

            return {
                ...state,
                isLoading: true,
                result: false
            };
        case type.FETCH_FOLLOWER_SUCCESS: {
            // const cateTemp = state.categories.categories.concat(action.result.data);
            console.log("FOLLOWER reducer ", action.result)
            return {
                ...state,
                result: action.result,
                isLoading: false,
                isError: false,
            }
        }
        case type.FETCH_FOLLOWER_FAILED:
            return {
                ...state,
                result:false,
                isLoading: false,
                isError: true,
            }
        default:
            return state;
    }

}
