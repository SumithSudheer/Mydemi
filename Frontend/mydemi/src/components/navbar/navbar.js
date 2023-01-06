import React,{useContext} from 'react'
import AuthContext from '../../services/AuthContext'
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    const {logoutUser} = useContext(AuthContext)
    const {user} = useContext(AuthContext)
    
    console.log(user)
    const register = async () => {
        fetch(`http://127.0.0.1:8000/tutor/register/${user.user_id}/`,{
            method:'PATCH'
        }).then(logoutUser)

    }
    

  return (
    <nav className="navbar navbar-light bg-secondary navbar-expand-md">
    <a href="#" className="navbar-brand">Mydemy</a>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
           { localStorage.getItem("authTokens")?
               
                   user.staff ?
                   <li className="nav-item primary"><Link to='staff/' className="nav-link"> login as Staff</Link></li>
                   : <li className="nav-item primary"><a onClick={()=>{register()}} className="nav-link btn"> Register as Staff</a></li>
                :null

           }
        {
            localStorage.getItem("authTokens")?

        <div className='d-flex logout'>

            <a className='btn btn-danger logout' onClick={(()=>{logoutUser()})} >Logout</a>
        </div>:
        <div className=' nav-item'>

        <Link className="nav-link" to='login'>Login</Link>
    </div>
        }
        </ul>
    </div>
</nav>
  )
}

export default Navbar