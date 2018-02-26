import * as React from 'react'
import { connect } from 'react-redux'
import { fetchBookById } from '../redux/actions/bookActions'

const BookItem = ({fetchBookById, match, book, error}) => {
  if (error !== undefined) {
    return <div>{error}</div>
  }

  if (book === undefined || Number(match.params.id) !== book.id) {
    fetchBookById(match.params.id)
    return <div>Loading...</div>
  }

  return <div>{book.name}</div>
}

const mapDispatchToProps = (dispatch) => ({
  fetchBookById: (id) => {
    dispatch(fetchBookById(id))
  }
})

export default connect(({booksReducer}) => booksReducer, mapDispatchToProps)(BookItem)
