import * as React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import BookItem from './BookItem'

const Main = () => (
  <div className='main'>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route exact path='/books/:id' component={BookItem} />
  </div>
)

export default Main
