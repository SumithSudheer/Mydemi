import React,{useState, useEffect, useContext} from 'react'
import './videoList.css'
import AuthContext from '../../../services/AuthContext'

function Videolist(props) {
    const {setCrntVideo} = useContext(AuthContext)
    const {crntVideo} = useContext(AuthContext)
    const {setcvid} = useContext(AuthContext)
    const {video} = useContext(AuthContext)
    const {setVideo} = useContext(AuthContext)


    const[section, setSection]=useState([])
    const[sec, setSec]=useState([])
    // const[video, setVideo]=useState([])
    const[crnt ,setCrnt] = useState(null)



    function handleVideoSelection(selectedVideo,id){
        console.log(crntVideo,'llllllbbbbbbbbbbbbbbbbbbbbbb')
        // setVideo(video)
        setCrntVideo(selectedVideo);
        setcvid(id)
    }

   const handleCLick = function  (name, id) {
    let v = section
    let p = v.map( (j,index)=>{

        if(index === name){
          return  !j
       }
   }

   )
    setSection(p)
    getVideo(id)

    
}
console.log(video,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')

async function getVideo (id) {
    let response = await fetch(`http://127.0.0.1:8000/tutor/video/?s=${id}`)
    response = await response.json()
    setVideo(response.data)
   
    }


 async function getSection () {
let response = await fetch(`http://127.0.0.1:8000/tutor/section/?pk=${props.props}`)
response = await response.json()
setSec(response.data)
let p =[]
for (let i=0; i<response.data.length; i++){
    p.push(false)
}
setSection(p)
}
    useEffect(()=>{
       getSection()
    
    },[])
  return (
    <div >
        <div className='list'>
            <div className='header'>
                Content
            </div>
            <div className='main'>
                <div  >
                    {sec.map((i, index)=>(
                        <div>
                        <div className='section' id={i.id} key={index}>

                        <p onClick={()=>{handleCLick(index, i.id)}}>

                         {i.name}
                    
                        </p>

                        </div>
                    <div className='videos_list'>
                        { 
                            section[index]? 
                            <div className="card container" >
                                <ul className="list-group list-group-flush">
                                {
                                    video.map((x ,index)=>(
                                        
                                        
                                        <li className="list-group-item" onClick={(()=>(handleVideoSelection(x.video,x.id)))}>{x.name} <p className='desc'>{x.description} {index}</p> </li>
                                    ))
                                }

                                
                                </ul>
                                </div>
                            : null
                        }
                      
                    </div>
                    </div>

                    )
                        
                    )}
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Videolist