import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">cher.dev</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/fun">Fun Stuff</Link>
    </nav>
  )
}

export default Nav
