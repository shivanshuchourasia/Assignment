import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =()=>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link className="navbar-brand" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-brand" to="/details">Details</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar