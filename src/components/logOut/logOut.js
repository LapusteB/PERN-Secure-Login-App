import React from "react";
import Login from "../login/login";
import "./logOut.css";


export default function logOut() {
    const handleSubmit = () => {
        sessionStorage.removeItem("token");
        <Login/>
        }
   
    return(
        <div className='login-wrapper'>
         <form onSubmit={handleSubmit}>
            <div className='button'>
            <button type="submit">log Out</button>
            </div>
         </form>
        </div>
        );
    }