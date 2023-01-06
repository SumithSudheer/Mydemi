import Signup from '../../components/signup/signup'
import jwt_decode from "jwt-decode";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";


function Signup_page() {
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
    <Signup/>
  )
}

export default Signup_page