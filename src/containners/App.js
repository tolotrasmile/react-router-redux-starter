import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/App.css'

import Header from '../components/Header'
import Main from '../components/Main'
import { fetchBooks } from '../redux/actions/bookActions'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    )
  }

  componentDidMount () {
    this.props.fetchBooks()
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => {
    dispatch(fetchBooks())
  }
})

export default connect(() => ({}), mapDispatchToProps)(App)
