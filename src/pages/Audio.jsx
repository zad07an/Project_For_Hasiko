import React, { useEffect, useRef, useState } from 'react'
import audio from '../assets/audio.mp3';

export default function Audio() {

    const audioRef = useRef()

    const onPlay = async () => {
        await audioRef.current.play()
    }

 

  return (
    <>
    <audio src={audio} ref={audioRef} autoPlay preload='true' />
    </>
  )
}
