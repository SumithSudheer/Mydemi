import React,{useContext} from 'react'
import AuthContext from "../../services/AuthContext";
import './signup.css'
import Google from '../../components/signup/social/google/google'
import Facebook from '../..//components/signup/social/facebook/facebook'
import { Link } from "react-router-dom";


function Signup() {
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        let flag=true
        if (password.length < 8){
          let p=document.getElementById('pass')
          p.innerHTML='Password must have min 8 chars'
          flag=false
          
        }if(phone.length!=10){
          let ph=document.getElementById('ph')
          ph.innerHTML="invalid Phone"
          flag=false
        }
        if(flag!=true){
          return
        }

        
        const response = await fetch('http://127.0.0.1:8000/api/signup/',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "password": password,
                "email": username,
                "name":name,
                "phone":phone
              })
        })
        console.log('fuck u');
        if(response.status==200){
          let ms = document.getElementById('message')
          ms.innerHTML='Success'
          let fr= document.getElementById('form_signup')
          loginUser(username,password)
          
          // alert('success')
        }
        console.log(response);
      }
  return (
    <section className=" gradient-custom">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white tt" >
          <div className="card-body p-5 text-center">

            <div className="md-5 mt-md-4 pb-5">
                <form onSubmit={handleSubmit} id='form_signup' disabled>

              <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
              <p className="text-white-50 mb-5">Please enter your details!</p>
              <div id='message' className='text-success '></div>
            
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='username' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="text" id="typeNameX" name='name' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeNameX">Name</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="number" id="typePhoneX" name='phone' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePhoneX">Phone</label>
                <div className='text-danger' id='ph'></div>
              </div>

              <div className="form-outline form-white mb-4 " >
                <input type="password" id="typePasswordX" name='password' className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              <div className='text-danger' id='pass'></div>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
              </form>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>
              <Google/>
              {/* <Facebook/> */}

            </div>

            <div className='down'>
              <p className="mb-0">Have an account? <Link to='/login' className='text-white-50 fw-bold'>Sign In</Link>
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

export default Signup