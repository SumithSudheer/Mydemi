import AddCourse from '../../../components/staff/addCourse/addCourse'
import Sidebar from '../../../components/staff/sidebar/sidebar'
import jwt_decode from "jwt-decode";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

function Addcourse() {
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

      <AddCourse/>
      </div>
        
            
     
  )
}

export default Addcourse