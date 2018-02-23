import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({books}) => (
  <div>
    <h1>Home</h1>
    <ul>
      {books && books.map(book => (
        <li key={book.id}><Link to={'/books/' + book.id}>{book.name}</Link></li>
      ))}
    </ul>
  </div>
)

export default connect(({booksReducer}) => booksReducer, () => ({}))(Home)
