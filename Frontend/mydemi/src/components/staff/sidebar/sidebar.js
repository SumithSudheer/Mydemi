import React,{useContext} from 'react'
// import './sidebar.css'
import { Link } from "react-router-dom";
import AuthContext from "../../../services/AuthContext"

function Sidebar() {
  const {logoutUser} = useContext(AuthContext)

  return (
            <div className="sidebar">
                <Link>Home</Link>
                <Link to='/staff/addvideos'>Add Videos</Link>
                <Link to='/staff/addcourse'>Add Course</Link>
                <Link to='/staff/courses'>Course</Link>
                <Link to='/staff/videos'>Videos</Link>

                <a href="#about">About</a>
                
            <a>

            <a className='btn btn-danger' onClick={(()=>{logoutUser()})} >Logout</a>
            </a>
        
            </div>
  )
}

export default Sidebar