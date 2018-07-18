import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoadingListNews1: false,
  isLoadingListNews2: false,
  isLoadingDetail: false,
  isErrorListNews: false,
  listnews1: [],
  listnews2: [],
  amount1: 0,
  amount2: 0,
  news: {}
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_ALL_NEWS1_REQUEST:

      return {
        ...state,
        isLoadingListNews1: true,
      };

    case type.FETCH_ALL_NEWS1_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("RECRUIMENT IN REDUCER", action.result)

      return {
        ...state,
        listnews1: action.result.data,
        amount1: action.result.amount,
        isLoadingListNews1: false,
        isErrorListNews: false,
      }

    }
    case type.FETCH_ALL_NEWS1_FAILED:
      return {
        ...state,
        isLoadingListNews1: false,

        isErrorListNews: true,
      }
    case type.FETCH_ALL_NEWS2_REQUEST:
      console.log(action.params)

      return {
        ...state,
        isLoadingListNews2: true,
      };

    case type.FETCH_ALL_NEWS2_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("RECRUIMENT IN REDUCER", action.result)

      return {
        ...state,
        amount2: action.result.amount,
        listnews2: action.result.data,
        isLoadingListNews2: false,
        isErrorListNews: false,
      }

    }
    case type.FETCH_ALL_NEWS2_FAILED:
      return {
        ...state,

        isLoadingListNews2: false,
        isErrorListNews: true,
      }
    case type.FETCH_DETAIL_NEWS_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingDetail: true,
      };
    case type.FETCH_DETAIL_NEWS_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("DETAIL NEWS IN REDUCER", action.result)
      return {
        ...state,
        news: action.result,
        isLoadingDetail: false,
        isErrorListNews: false,
      }
    }
    case type.FETCH_DETAIL_NEWS_FAILED:
      return {
        ...state,
        isLoadingDetail: false,
        isErrorListNews: true,
      }
    default:
      return state;
  }

}
