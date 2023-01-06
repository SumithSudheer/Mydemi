import React,{useEffect} from 'react'
import FacebookLogin from 'react-facebook-login';

function Facebook() {
    const responseFacebook = (response) => {
  console.log(response);
}


useEffect (()=>{
    
    
})


  return (
    <div>
        <FacebookLogin
    appId="1565905643922032"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />
   
    </div>
  )
}

export default Facebook