import React,{useContext, useState } from 'react'
import './addCourse.css'
import AuthContext from '../../../services/AuthContext'


function AddCourse() {
  const {user} = useContext(AuthContext)
  const [fileim, setFileim]=useState(null)
  const [user1, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? localStorage.getItem("authTokens")
      : null
  );
    
    const addcourse = async e=>{
        e.preventDefault();
        document.getElementById('message').innerHTML=null
        console.log(fileim)
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        console.log(user)
        const formData = new FormData()
        formData.append('name', e.target.username.value)
        formData.append('description', e.target.password.value)
        formData.append('user',user)
        formData.append('thumbnail',fileim)
        formData.append('category', 1)
        console.log(formData)
        const  response= await fetch(`http://127.0.0.1:8000/tutor/course/${user.user_id}/`,{
            method: 'POST',
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${String(JSON.parse(user1).access)}`
              },
              body: formData
              // JSON.stringify({
              //   "name":e.target.username.value,
              //   "description":e.target.password.value,
              //   "user": user,
              // })

        }).then(e.target.username.value=null,e.target.password.value=null).then(response => response.json())
        .then(json => {
          console.log('parsed json', json) // access json.body here
          document.getElementById('message').innerHTML=json.message;
          document.getElementById('message').classList.add('alert-warning')
        })
        console.log(response.message)
    } 
  return (
    <div className='content'>
        <div className='addcourse'>
        <div className='header'>Add Course</div>
        <form onSubmit={addcourse} encType='multipart/form-data'>
        <div className="form-group">
            <label for="exampleInputEmail1">Course Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Course Name" name='username'/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" name='password' />
        </div>
        <div className="form-group">
    <label for="exampleFormControlFile1">File to upload</label> <span></span>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=>{setFileim(e.target.files[0])}}/>
  </div>
  
        <br />
        <div className='submit-btn'>
        <div id='message' >
        
        </div>
        <br />
        <button type="submit" className="btn btn-primary ">Submit</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default AddCourse