import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './video.css'

function VideoPlayer() {
    const url = 'https://firebasestorage.googleapis.com/v0/b/mydemi-b1cfe.appspot.com/o/speed%20test%20-%20Google%20Search%20-%20Google%20Chrome%202022-08-08%2009-59-45.mp4e2b67316-63a3-4d83-aed4-49ad910909fe?alt=media&token=bb820068-f286-42ae-af4c-d74c06dd5e93'
    return (
        <div >
             <video
    id="my-video"
    className="video-js"
    controls
    preload="auto"
    width="1000"
    height="400"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    {/* <source src={url} type="video/mp4" /> */}
    <source src={url} type="video/webm" />
    <p className="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video </a>
    </p>
  </video>
        </div>
    )
}

export default VideoPlayer