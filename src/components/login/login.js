import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myGif from './bg.mp4';
import "./video.css";

import Create from '../create/create';
import "./login.css";


//Async Function to take credentials as an argument to fetch a POST option

export default function Login({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  async function loginUser(credentials) {
    return fetch('http://localhost:8080/auth', {
      username: username,
      password: password,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   

    //Submit Form handler that calls loginUser with the Uname and pass
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({username, password});
          setToken(token);     
    }
   
    
    
    
    return(
      <div className='login-wrapper'>
      
        <h1>Login</h1>
        <video autoPlay loop muted id='video'>
        <source src={myGif} type='video/mp4'/>
      </video>
        <form onSubmit={handleSubmit}>
            <label>
            <p>Username</p>
            <input className='input-field' type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
            <p>Password</p>
            <input className='input-field' type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div className='button'>
            <button type="submit">Submit</button>
            {sessionStorage.getItem("token") ?  <p className='login-color'>Error, Wrong Username or Password</p>:""}
            </div>
        </form>
        <Create/>
        
    </div>
    
    
    )
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };