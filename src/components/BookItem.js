import * as React from 'react'
import { connect } from 'react-redux'
import { fetchBookById } from '../redux/actions/bookActions'

const BookItem = ({fetchBookById, match, book, error}) => {
  if (!book || book.id !== Number(match.params.id)) {
    fetchBookById(match.params.id)
    return <div>{error || 'Loading book'}</div>
  } else {
    return <div>{book.name}</div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBookById: (id) => {
    dispatch(fetchBookById(id))
  }
})

export default connect(({booksReducer}) => booksReducer, mapDispatchToProps)(BookItem)