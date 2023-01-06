import React,{useState, useEffect} from 'react'

function VideoApprove() {
  const [approve, setApprove] = useState([])
  const delet = function (id)  {
    let response = fetch(`http://127.0.0.1:8000/tutor/delete_video/${id}/`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      
    }).then(response => response.json())
    .then(data=> console.log(data))
    getApprove()
      
  }
  const appr = function (id)  {
    let response = fetch(`http://127.0.0.1:8000/tutor/video/${id}/`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({active:true})
    }).then(response => response.json())
    .then(data=> console.log(data))
    getApprove()
      
  }
  async function getApprove () {
    console.log('lllllllllllllllllllll')
    let response = await fetch(`http://127.0.0.1:8000/super/approve/`)
    response = await response.json()
    setApprove(response.data)
    console.log(response)
    

  }
  useEffect(()=>{
    getApprove()

  },[])

  return (
    <div className='content'>
      <table className='table table-striped'>
      <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Video_id</th>
      <th scope="col">Video</th>
      <th scope="col">Approve</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
     approve.map((i)=>(

    <tr>
      <th scope="row">{i.id}</th>
      <td>{i.video}</td>
      <td><video width="200" height="200" controls>
  <source src={i.content} type="video/mp4"/>
</video></td>
      <td><a className='btn btn-success' onClick={(()=>{appr(i.video)})}>Approve {i.video}</a></td>
      <td><a className='btn btn-danger' onClick={(()=>{delet(i.video)})} >Delete</a></td>


    </tr>
     ))
    }
    
  </tbody>
</table>
    </div>
  )
}

export default VideoApprove