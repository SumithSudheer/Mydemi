import React,{useState, useEffect} from 'react'
import './coursedList.css'
import VideoPlayer from '../videoplayer/videoPlayer'
import Comments  from '../comments/comments'
import Videolist from '../videoList/videolist'


function CoursedList() {

  
  return (
    <div className='container-fluid'>

    <div className='row justify-content-center'>
        <div className='col col-12 col-md-8'>

        <VideoPlayer/>
        <Comments/>

        </div>
        <div className='course_content col col-6 col-md-4'>
            <Videolist/>
        
        </div>
    </div>
        <div className='row'>

        <div className='col col-12 col-md-8'>

        </div>
        </div>
    </div>

  )
}

export default CoursedList