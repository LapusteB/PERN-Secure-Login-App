import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import LogOut from './components/logOut/logOut';
import Create from './components/create/create';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return  ( <Login setToken={setToken} /> 
    )
  }
  
  return (
    <div className="App">
      <h1>Cipher Tech App</h1>
      
      <LogOut/>
      
      <div className='App-header'>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/CreateAccount"element={<Create/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
