import { useEffect, useRef, useState } from "react"
import Video from "./components/video"

export default function ExerciseRef() {
    const play = useRef()
    const [isPlaying, setPlaying] = useState(false)
    
    const handlePlay = () => {

        setPlaying(isPlaying)

        
        if (isPlaying) {
            play.current.play()
        } else {
            play.current.pause()
        }

    }
    
    useEffect(() => {
        if (!play.current) {
            return
        }
        const videoEl = play.current;
        const handlePlay = () => {
            setPlaying(true)
        }
        const handlePause = () => {
            setPlaying(false)
        }
        videoEl.addEventListener("play", handlePlay)
        videoEl.addEventListener("pause", handlePause)
        return () => {
            videoEl.removeEventListener("play", handlePlay)
            videoEl.removeEventListener("pause", handlePlay)
        }
    }, [])
  return (
    <div>
        <Video ref={play}/>
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <button onClick={handlePlay} >{!isPlaying ? "play" : "pause"}</button>
            <span>00:00</span>
        </div>
    </div>
  )
}
