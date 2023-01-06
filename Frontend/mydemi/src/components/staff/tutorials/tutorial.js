import React,{useState, useContext, useEffect, useRef} from 'react'
import AuthContext  from '../../../services/AuthContext'

function Tutorial() {
    const {user} = useContext(AuthContext)
    const [course, SetCourse]= useState([])
    const [section, setSection] = useState([])
    const [tutorial, setTutorial] = useState([])
    const [count, setCount] = useState(1)
    const [lim, setLim] = useState(1)
    const [page, setPage] =useState(1)
    const [cou, setCou] = useState()
    const [sec, setSec] = useState(null)
    const off = useRef(0)
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
async function getTutorial () {
    let response = await fetch(`http://127.0.0.1:8000/tutor/video/?pk=${user.user_id}&s=${sec!=null?sec:section[0].id}`)
    response = await response.json()
    console.log(response.data+'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    setTutorial(response.data)
    

  }



    async function getCourse () {
        let response = await fetch(`http://127.0.0.1:8000/tutor/course/?pk=${user.user_id}`)
        response = await response.json()
        console.log(response.data)
        SetCourse(response.data)
        getSection()

      }
      async function getSection () {
        let response = await fetch(`http://127.0.0.1:8000/tutor/section/?pk=${cou!=null?cou:course[0].id}`)
        response = await response.json()
        console.log(response.data)
        setSection(response.data)
        

      }

    useEffect(()=>{
          getCourse()
    },[])
  return (
    <div className='content'>
         <div className="form-group">
            <label for="exampleInputEmail1">Course Name</label>
            <select id='select_course1' className="form-control selectVal" name='course' onClick={getSection}  onChange={(e)=>{setCou(e.target.value)}}>
            {
                course.map((i)=>(
                    <option key={i.id} value={i.id}>{i.name}</option>
                ))
            }
            </select>
        </div>
        {
            section.length == 0? null :
        <div className="form-group">
            <label for="exampleInputEmail1">Section Name</label>
            <select id='select_course1' className="form-control selectVal" name='course' onClick={getTutorial}  onChange={(e)=>{setSec(e.target.value)}}>
            {
                section.map((i)=>(
                    <option key={i.id} value={i.id}>{i.name}</option>
                ))
            }
            </select>
        </div>
        }
              <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Video</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {
     tutorial.map((i)=>(

    <tr>
      <th scope="row">{i.id}</th>
      <td>{i.name}</td>
      <td><video width="200" height="200" controls>
  <source src={i.video} type="video/mp4"/>
</video>
</td>
      <td>{i.description}</td>
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

export default Tutorial