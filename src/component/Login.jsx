import React, { useState } from 'react'

function Login({ loginImage }){
const [username, setUsername]=useState('');
const [userpassword, setUserpassword]= useState('');

  return (
  <>

  <h2 className='login-heading'>Login Form</h2>
    <form className='form-container'>
    <img src={loginImage} alt="Login Logo" />
      <label htmlFor='name'></label>
      <input className='input-field'
       id='name'
        name='name' 
        type='text' 
        value={username}
        placeholder='Enter your Name'
        onChange={(e)=> setUsername(e.target.value)}
        ></input>

      <label htmlFor='password'></label>
      <input className='input-field'
      id='password'
       name='password'
        type='password' 
        value={userpassword}
        placeholder='Enter your password'
        onChange={(e)=> setUserpassword(e.target.value)}
        ></input>
        <button class="login-submit">Submit</button>
    </form>
</>

  )
}

export default Login
