import React,{useEffect, useState, useContext} from 'react'
import AuthContext from '../../../services/AuthContext'
import './addVideos.css'


function AddSection() {
    const {user} = useContext(AuthContext)
    const [course, setCourse] = useState([])
    const addsection = async e=>{
        e.preventDefault();
        var sel = document.getElementById('select_course');
        var value = sel.value
        console.log(value)
        var na = document.getElementById('exampleInputPassword1').value
        console.log(na)
        console.log(value)

        document.getElementById('message').innerHTML=null
        const  response= await fetch('http://127.0.0.1:8000/tutor/section/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "course":value,
                "section":na,
                "user": user
              })

        }).then(e.target.username.value=null,e.target.password.value=null).then(response => response.json())
        .then(json => {
          console.log('parsed json', json) // access json.body here
          document.getElementById('message').innerHTML=json.message;
          document.getElementById('message').classList.add('alert-warning')
        })
        console.log(response.message)
    } 
   
    useEffect(()=>{
      async function getCourse () {
        let response = await fetch(`http://127.0.0.1:8000/tutor/course/?pk=${user.user_id}`)
        response = await response.json()
        console.log(response.data)
        setCourse(response.data)

      }
      getCourse()
      
    },[])
    
  return (
    <div className='col-6'>
    <div className='header addcourse '>AddSection</div>
    <form onSubmit={addsection}>
        <div className="form-group selectVal">
            <label for="exampleInputEmail1">Course Name</label>
            <select id='select_course' className="form-control" name='course'>
            {
                course.map((i)=>(
                    <option key={i.id} value={i.id}>{i.name}</option>
                ))
            }
            </select>
        </div>
        <div className="form-group selectVal">
            <label for="exampleInputPassword1">Section Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name of the Section" name='sectionname' />
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
  )
}

export default AddSection