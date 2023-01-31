import React,{useState, useEffect, useContext} from 'react'
import './coursedList.css'
import VideoPlayer from '../videoplayer/videoPlayer'
import Comments  from '../comments/comments'
import Videolist from '../videoList/videolist'
import { useLocation } from 'react-router-dom';
import AuthContext from '../../../services/AuthContext'
import Videolistbig from '../videoList/videolistbig'



function CoursedList() {
  const {crntVideo} = useContext(AuthContext)

  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const id = queryString.get('id');
  console.log(crntVideo,'klskallakslkkasklkslkals')

 

  return (
    <div className='container-fluid'>

    <div className={` ${crntVideo?'row justify-content-center':null}`}>
        <div className={` ${crntVideo?'row col col-12 col-md-8 col-sm-12':null}`}>
{
  crntVideo?
  <div>
  <VideoPlayer />
  <Comments/>
  </div>
  
  :
  <div className='bigvideolist'>
    <Videolistbig props={id}/>
  </div>
}
{/* <VideoPlayer />
  <Comments/> */}

        </div>
          {
            crntVideo!=[]?

        <div className='course_content col col-6 col-md-4 col-sm-12'>
             <Videolist props={id}/>
          

        </div>
             :null 

          }
          {/* <Videolist props={id}/> */}
        
    </div>
        <div className='row'>

        <div className='col col-12 col-md-8'>

        </div>
        </div>
    </div>

  )
}

export default CoursedList