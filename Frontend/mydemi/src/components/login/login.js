import React, {useContext} from 'react'
import './login.css'
import AuthContext from "../../services/AuthContext";
import { Link } from "react-router-dom";
import Google from '../signup/social/google/google'

function Login() {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username)
        username.length > 0 && loginUser(username, password);
      };
  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white tt" >
          <div className="card-body p-5 text-center">

            <div className="md-5 mt-md-4 pb-5">
                <form onSubmit={handleSubmit}>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
            
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='username' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" name='password' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </form>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>
            <Google/>

            <div className='down'>
                
              <p className="mb-0">Don't have an account? <Link to='/signup' className='text-white-50 fw-bold'>Sign Up</Link> 
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login