import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({books, book}) => (
  <div>
    <h1>Home</h1>
    <ul>
      {books && books.map(item => (
        <li key={item.id}>
          <Link to={'/books/' + item.id} onClick={() => console.log('book', book)}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default connect(({booksReducer}) => booksReducer, () => ({}))(Home)
