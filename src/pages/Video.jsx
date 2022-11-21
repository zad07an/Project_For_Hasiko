import React from 'react'
import vid from '../assets/video_2022-11-18_11-23-05.mp4'

export default function Video() {
  return (
    <div>
        <video src={vid} playsInline={true} autoPlay muted width='100%' height='100%'/>
    </div>
  )
}
