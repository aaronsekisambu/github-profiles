import axios from 'axios'
import {GET_USER_PROFILES, FAILED_TO_GET_USER_PROFILES, FAILED_TO_GET_USER_REPOS, GET_USER_REPOS, GET_USER_PROFILE, FAILED_TO_GET_USER_PROFILE } from '../action-types/index';

export const getUsersProfiles = () => async dispatch => {
  const URL = 'https://api.github.com/users';
  try {
    const profiles = await axios.get(URL, {header: {}});
    const { data } = profiles;
      return dispatch({type: GET_USER_PROFILES, payload: data}) 
  } catch (error) {
    const { message } = error
    return dispatch({type: FAILED_TO_GET_USER_PROFILES, payload: message})
    
  }
};

export const getUserProfile = (name) => async dispatch => {
  const URL = `https://api.github.com/users/${name}`;
  try {
    const profiles = await axios.get(URL, {header: {}});
    const { data } = profiles

    return dispatch({type: GET_USER_PROFILE, payload: data})
    
  } catch (error) {
    const { message } = error
    return dispatch({type: FAILED_TO_GET_USER_PROFILE, payload: message})
    
  }
};

export const getUserRepos = (name) => async dispatch => {
  const URL = `https://api.github.com/users/${name}/repos`;
  try {
    const profiles = await axios.get(URL, {header: {}});

    const { data } = profiles

    return dispatch({type: GET_USER_REPOS, payload: data})
    
  } catch (error) {
    const { message } = error
    return dispatch({type: FAILED_TO_GET_USER_REPOS, payload: message})
    
  }
};