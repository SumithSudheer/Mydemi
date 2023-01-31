import React,{useContext, useRef, useEffect, useState} from 'react'
import ReactPlayer from 'react-player/lazy'
import './video.css'
import AuthContext from '../../../services/AuthContext'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function VideoPlayer(props) {
  const {crntVideo} = useContext(AuthContext)
  const {user} = useContext(AuthContext)
  const {cvid} = useContext(AuthContext)
  const [vidDet, setvidDet] = useState(null)
  const {video} = useContext(AuthContext)


  const videoRef = useRef(null);
  const like = async function (){
    console.log(crntVideo)
    // console.log('hjjhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    const response = await fetch('http://127.0.0.1:8000/analytics/like',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${String(JSON.parse(user).access)}`
      },
      body :
            JSON.stringify({
              "video":cvid,
              "like":true,
              "user":user.user_id
          })


    })
    // response = await response.data.json()
    // console.log(response,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    getVideo()
  }
  const dislike = async function (){
    console.log(crntVideo)
    // console.log('hjjhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    let response = await fetch('http://127.0.0.1:8000/analytics/dislike',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${String(JSON.parse(user).access)}`
      },
      body :
            JSON.stringify({
              "video":cvid,
              "user":user.user_id
          })


    })
    // response = await response.data.json()
    // console.log(response,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    getVideo()
  }

  const getVideo = async function(){
    let response = await fetch(`http://127.0.0.1:8000/tutor/video/${cvid}/`)
    console.log(response,'lllllllllllllllllllllllllll')
    response = await response.json()
    console.log(response.data,'llllllllllllllklklkklkkklkllllllll')
    setvidDet(response.data)
    console.log(vidDet[0].video_views.length,'wwwwwwwwwwwwwwwwwwwwwwww')
  }


    // useContext(()=>{
      
    //   if(videoRef.current) {
    //     videoRef.current.play();
    //  }
    // },[videoRef])
    useEffect(()=>{
      getVideo()
    },[crntVideo])
    return (
        <div >
             <video
             key={crntVideo}
             ref={videoRef}
    id="my-video"
    className="video-js"
    controls
    preload="false"
    width="1000"
    height="400"
    // poster="https://firebasestorage.googleapis.com/v0/b/mydemi-b1cfe.appspot.com/o/speed%20test%20-%20Google%20Search%20-%20Google%20Chrome%202022-08-08%2009-59-45.mp4e2b67316-63a3-4d83-aed4-49ad910909fe?alt=media&token=bb820068-f286-42ae-af4c-d74c06dd5e93"
    data-setup="{}"
  >
    <source src={crntVideo} type="video/mp4" />
    <source src={crntVideo} type="video/webm" />
    <p className="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video </a>
    </p>
  </video>
  <div className='video_desc like'>
    <div className='like'>
      <div className='dislike' onClick={()=>{like()}}>

      <ThumbUpIcon  />&nbsp;&nbsp;
      </div>
      <span>{vidDet? vidDet[0].video_likes.length : 0}</span>
    </div>
    <div className='like'>
    <div className='dilike' onClick={()=>{dislike()}}>

      <ThumbDownAltIcon color="primary"/>&nbsp;&nbsp;
      </div>
      <span>{vidDet? vidDet[0].video_dislikes.length : 0 }</span>

    </div>
    <div className='like view'>
      <p><strong>Views</strong></p>&nbsp;&nbsp;
      <span>{vidDet? vidDet[0].video_views[0].view : 0}</span>
    </div>
  </div>
        </div>
    )
}

export default VideoPlayer