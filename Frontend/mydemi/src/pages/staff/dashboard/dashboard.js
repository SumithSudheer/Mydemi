
import Sidebar from '../../../components/staff/sidebar/sidebar'
import jwt_decode from "jwt-decode";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";


function Dashboardstaff() {
  const history = useNavigate();
  const [user, setUser] = useState(() =>
  localStorage.getItem("authTokens")
    ? jwt_decode(localStorage.getItem("authTokens"))
    : null
);
  useEffect (()=>{
    console.log(user)
    try{
      if(user.staff != true){
          history("/")
      }

    }
    catch{
      history("/login")
    }
  })
  return (
    <Sidebar/>
  )
}

export default Dashboardstaff