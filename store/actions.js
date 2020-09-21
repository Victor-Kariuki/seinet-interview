import $http from '../utils/api'
import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from './constants'

export const fetchEventsSuccess = (data) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: data
})

export const fetchEventsError = (error) => ({
  type: FETCH_EVENTS_ERROR,
  payload: error
})

export function fetchEvents(pageNumber) {
  console.log(pageNumber)
  return async (dispatch) => {
    dispatch({ type: FETCH_EVENTS })
    try {
      const response = await $http({
        url: `/events?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&per_page=25&page=${pageNumber}`,
        method: 'GET'
      })
      console.log(response.data.meta)
      return dispatch(fetchEventsSuccess(response.data))
    } catch (error) {
      console.log(error)
      return dispatch(fetchEventsError(error))
    }
  }
}
