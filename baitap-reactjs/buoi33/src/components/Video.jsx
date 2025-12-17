import React from 'react'
import video from "/my-video.mp4"
import { useEffect, useRef } from "react"

export default function Video({ref}) {
  return (
    <div>
        <video
        ref={ref}
    controls
        src={video} width={300} height={200}>
        </video>

    </div>
  )
}
