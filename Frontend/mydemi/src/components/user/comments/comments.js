import React,{useState, useEffect, useContext} from 'react'
import './comments.css'
import AuthContext from '../../../services/AuthContext'
import { async } from '@firebase/util'


function Comments() {
  const {user} = useContext(AuthContext)
  const {cvid} = useContext(AuthContext)


  const [comments, setComments] = useState([])

const post_comment = async function (){
  console.log('sssssssssssssssssssssssssssssssss')
  console.log(document.getElementById('commentinput').value)
  let response = fetch(`http://127.0.0.1:8000/analytics/comments/`,{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${String(JSON.parse(user).access)}`
    },
    body: 
    JSON.stringify({
      "comment":document.getElementById('commentinput').value,
      "video":cvid,
      "user":user.user_id
  })
  
})
document.getElementById('commentinput').value=''
getComments()
}


const getComments =async function(){
  console.log('commentsssssssssssssssssssssssssss')
 let response = await fetch(`http://127.0.0.1:8000/analytics/comments/${cvid}/`)
 response = await response.json()
 console.log(response,'------------------------------------------')
 setComments(response)
}
useEffect(()=>{
  getComments()
},[cvid])
useEffect(()=>{

},[])


  return (
    <div className='comments'>
        <section  className='section_comment'>
  <div className="container-fluid  ">
    <div className="row d-flex justify-content-center">
      <div className="">
        <div className="card text-dark">
          <div className="card-body p-4">
            <h4 className="mb-0">Recent comments</h4>
            <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>
            </div>

    {
      comments.map((i)=>(
        <>
        <div className="card-body p-4">
            {/* <h4 className="mb-0">Recent comments</h4>
            <p className="fw-light mb-4 pb-2">Latest Comments section by users</p> */}
        <div className="d-flex flex-start">
              {/* <img className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                height="60" /> */}
              <div>
                <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">
                    {i.date} 
                    {/* <span className="badge bg-primary">Pending</span> */}
                  </p>
                  <a href="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                  <a href="#!" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                  <a href="#!" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                </div>
                <p className="mb-0">
                 {i.comment}
                </p>
              </div>
            </div>
        </div>
        <hr className="my-0" />
        </>
      ))
        }
            
            <div className='buttonIn'>

          <label htmlFor="">Comments</label>
          <input id="commentinput" type="text"></input>
          <button className='cmnt_btn button_comments' onClick={()=>{post_comment()}}>Send</button>
            </div>



        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Comments