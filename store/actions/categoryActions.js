import $http from '../../utils/api'
import { FETCH_CATEGORIES, FETCH_CATEGORY } from '../constants'

export function fetchCases() {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES })
    try {

    } catch (error) {

    }
  }
}

export function fetchCase() {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORY })
  }
}