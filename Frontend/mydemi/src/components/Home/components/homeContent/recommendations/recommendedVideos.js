import React,{useState, useEffect, useContext} from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";
import AuthContext from '../../../../../services/AuthContext'
import { async } from "@firebase/util";

function RecommendedVideos() {
  const user =useContext(AuthContext)
  const [course, setCourse] = useState([])
  const get_course = async function  (){
    fetch("http://127.0.0.1:8000/tutor/course/"
    ,{
      method: 'GET',
      // 
      // credentials:'include',
      headers:{
          'Content-Type': 'Application/JSON',      
          // Authorization: `Token ${String(JSON.parse(user).access)}`,
          // 'Cookie':document.cookie
          },
      
      
        }).then(async(response)=>{

    // console.log(response.json())
    let hi = await response.json()
    console.log(hi)
    setCourse(hi.data)
  })
    // let data = response.json()
    // console.log(data)
  }
  useEffect(()=>{
    get_course()
  },[])
  return (
    // <div className="container-fluid">
      // {/* <div className="row"> */}

      

    <div className="recommendedVideos">
      {
        course.map((i)=>(
          // <div className="col col-4">
          <VideoCard
            id={i.id}
            courseTitle={i.name}
            imgSrc={i.thumbnails}
            instructor={i.description}
            rating={6}
            noOfStudents={"(166,042)"}
            price={i.price}
          />
          // </div>
        ))
      }
    
    </div>
   

  );
}

export default RecommendedVideos;
