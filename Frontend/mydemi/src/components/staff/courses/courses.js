import React,{useEffect, useState, useRef, useContext} from 'react';
import {useTable} from 'react-table'
import AuthContext from '../../../services/AuthContext'

function Courses() {
    const [count, setCount] = useState(1)
    const [lim, setLim] = useState(1)
    const [page, setPage] =useState(1)
    const {user} = useContext(AuthContext)

    // const [off, setOff] = useState(0)
    const off = useRef(0)
    const [course, SetCourse]= useState([])
    const next = function ()  {
        

            // setOff(off+1)
            off.current = off.current+lim
            setPage(page+1)
            console.log('hjhjhhj'+off.current)
            getCourse()
       
        
        
    }
    const prev = function ()  {
        
            off.current = off.current-lim
            setPage(page-1)
            // setOff(off-1)
            console.log('hjhjhhj'+off.current)
            getCourse()
       
        
    }
    async function getCourse () {
        let response = await fetch(`http://127.0.0.1:8000/tutor/course/?pk=${user.user_id}&limit=${lim}&offset=${off.current}`)
        response = await response.json()
        console.log(response.data)
        SetCourse(response.data)
        setCount(response.count)

      }

    useEffect(()=>{
          getCourse()
    },[])

  return (
    <div className='content'>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Tutor</th>
    </tr>
  </thead>
  <tbody>
    {
     course.map((i)=>(

    <tr>
      <th scope="row">{i.id}</th>
      <td>{i.name}</td>
      <td>{i.description}</td>
      <td>{i.staff}</td>
    </tr>
     ))
    }
    
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul className="pagination">
    {
        off.current<=0? null :

    <li className="page-item"><a className="page-link" onClick={prev}>Previous</a></li>
    }



      { count/lim <= page ? null :
    <li className="page-item"><a className="page-link"  onClick={next}>Next</a></li>
}
  </ul>
</nav>
    </div>
  )
}

export default Courses