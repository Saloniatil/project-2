import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Login() {
  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Login</h2>
        <br />
        <form action="">
          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder='Enter email'/>
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='***********'/>
          </div>
          <button className='signup_btn'>Login</button>
        </form>
        <br></br>
        <p>Not Registered?</p>
          <Link to="/register"><button>Signup</button></Link> 
      </div>
    </div>
  )
}

export default Login