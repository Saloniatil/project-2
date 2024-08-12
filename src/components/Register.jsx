import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Register() {
  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Sign up</h2>
        <br />
        <form action="">
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text" placeholder='Enter username'/>
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder='Enter email'/>
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='***********'/>
          </div>
          <button className='signup_btn'>Sign up</button>
        </form>
        <br></br>
        <p>Already have account?</p>
          <Link to="/login"><button>Login</button></Link> 
      </div>
    </div>
  )
}

export default Register