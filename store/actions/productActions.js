import $http from '../../utils/api'
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../constants'

export function fetchCases() {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS })
    try {

    } catch (error) {

    }
  }
}

export function fetchCase() {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT })
  }
}