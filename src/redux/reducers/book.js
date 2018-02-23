import { combineReducers } from 'redux'

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_FULFILLED' :
      return {...state, books: action.payload}
    case 'FETCH_BOOK_BY_ID_FULFILLED' :
      return {...state, book: action.payload}
    case 'FETCH_BOOK_BY_ID_REJECTED' :
      return {...state, error: action.payload}
    default:
      break
  }
  return state || {}
}

export default combineReducers({booksReducer})
