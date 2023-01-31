import React,{useContext} from "react";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import AuthContext from '../../../../services/AuthContext'

function HeaderPrimary() {
  const {logoutUser} = useContext(AuthContext)
  const {user} = useContext(AuthContext)
  
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.jpg" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        
        <div className="teachDiv">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="teach" to='staff'>Teach on Udemy</Link>
        </div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        {/* <div className="login button">Log In</div> */}

        {
            localStorage.getItem("authTokens")?

        

            <a style={{ color: 'inherit', textDecoration: 'inherit'}} className='login button' onClick={(()=>{logoutUser()})} >Logout</a>
        :
        

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="login button" to='login'>Login</Link>
   
        }
        

        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
