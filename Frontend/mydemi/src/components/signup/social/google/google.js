import React,{useEffect, useContext} from 'react'
// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import { async } from '@firebase/util';
import AuthContext from "../../../../services/AuthContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import {OAuth2Client} from "google-auth-library"
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client('121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com');
function Google() {
  const { loginUser } = useContext(AuthContext);
  const history = useNavigate();

  const responseGoogle = async (token) => {
        console.log(token);
      //   fetch('http://127.0.0.1:8000/api/google_login/',{
        //       method: 'POST',
        //       headers: {
          //           "Content-Type": "application/json"
          //         },
          //         body: JSON.stringify({
            //           "token":token
            //         })
            
            //   }).then(json => {
              //     console.log(json)
              //   })
              //   // console.log(response)
      //   // if (response.status==200){
        
      //   // }
      // }
      axios.post('http://127.0.0.1:8000/api/google_login/',{
        token:token
      }).then((response)=>{
        console.log(response.data.data)
        localStorage.setItem("authTokens", JSON.stringify(response.data.data));
        window.location.reload()
      })
    }
     
      return (
        <div>
        {/* <GoogleLogin
    clientId="121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> */}
  {/* <script src="https://accounts.google.com/gsi/client" async defer></script>
  <div id="g_id_onload"
  data-client_id="121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com"
  
  
  data-login_uri="https://127.0.0.1:3000/"
  data-auto_prompt="false">
</div>

<div className="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
    </div> */}

      {/* <div id="g_id_onload"
         data-client_id="121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com"
         data-login_uri="https://127.0.0.1:3000/"
         data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
        </div> */}

      <GoogleLogin
  onSuccess={credentialResponse => {
    responseGoogle(credentialResponse.credential);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
      

    </div>
  )
}
export default Google