import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link><br />
      <Link to='/About'>About</Link><br />
      <Link to='/Content'>Content</Link> <br />
    </div>
  )
}

