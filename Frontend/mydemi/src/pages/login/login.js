import Login from '../../components/login/login'
import jwt_decode from "jwt-decode";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";


function Login_page() {
  const history = useNavigate();
    const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
    useEffect (()=>{
        if(user != null){
            history("/")
        }
    })
  return (
    <Login/>
  )
}

export default Login_page