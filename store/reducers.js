import { combineReducers } from 'redux'

import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from './constants'

export const initialState = {
  events: [],
  meta: {},
  loading: false,
  error: {}
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, loading: true }

    case FETCH_EVENTS_SUCCESS:
      return { ...state,  events: action.payload.events, meta: action.payload.meta, loading: false }

    case FETCH_EVENTS_ERROR:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  events: eventsReducer,
})

export default rootReducer