import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-header'>
      
      <div>
        <a href="/home" className='link'>Home</a>
        <a href="/addpost" className='link'>Create</a>
        <a href="" className='link'>Contact</a>
      </div>
      <div><h5><Link to="/register" className='link'> Register/Login</Link></h5> </div>
    </div>
  )
}

export default Navbar