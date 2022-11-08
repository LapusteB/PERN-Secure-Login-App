import React from "react";
import { useState } from "react";
import "./create.css"

//import PropTypes from 'prop-types';

export default function Create() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

/*
async function CreatUser(credentials) {
    return await fetch('http://localhost:8080/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
      //.then(data => data.json());
   }

   const handleSubmit = async e => {
    e.preventDefault();
    CreatUser({username, password});
    //setToken(token);
         

}*/
const handleSubmit = async e => {
    //e.preventDefault();
    const creds = {username, password};
    const response = fetch('http://localhost:8080/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
      });
    console.log(response);
}
    //CreatUser({username, password});
    //setToken(token);

    return(
        <div className='create-wrapper'>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <p>Create a Username</p>
            <input className='input-field' type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
            <p>Create a Password</p>
            <input className='input-field' type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div className='button'>
            <button type="submit">Create</button>
            </div>
        </form>
    </div>
    );
}
//Create.propTypes = {
//    setToken: PropTypes.func.isRequired
//  };