import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../constants'

export const initialState = {
  products: [],
  category: {},
  loading: false,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload }

    case FETCH_PRODUCT:
      return { ...state,  category: action.payload }

    default:
      return state
  }
}

export default productsReducer