
import Sidebar from '../../../components/staff/sidebar/sidebar'
import Courses from '../../../components/staff/courses/courses'
import jwt_decode from "jwt-decode";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Course() {
    const history = useNavigate();
    const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
    useEffect (()=>{
      if(user == null || user.staff != true ){
        history("/")
    }
    })
  return (
    <div>
        <Sidebar/>
        <Courses/>
    </div>
  )
}
