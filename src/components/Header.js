import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <nav>
    <ul>
      <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    </ul>
  </nav>
)

export default Header
