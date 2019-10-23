import {GET_USER_PROFILES, GET_USER_PROFILE, GET_USER_REPOS, FAILED_TO_GET_USER_PROFILES, FAILED_TO_GET_USER_REPOS, FAILED_TO_GET_USER_PROFILE } from '../action-types/index';
import initialState from '../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PROFILES:
      return {
        ...state,
       profiles: payload,
      };
    case FAILED_TO_GET_USER_PROFILES:
      return {
        ...state,
        error: payload,
      };
      case GET_USER_PROFILE:
        return {
          ...state,
         profile: payload,
        };
      case FAILED_TO_GET_USER_PROFILE:
        return {
          ...state,
          error: payload,
        };
      case GET_USER_REPOS:
          return {
            ...state,
           repos: payload,
          };
      case FAILED_TO_GET_USER_REPOS:
          return {
            ...state,
            error: payload,
          };
    default:
      return state;
  }
};
