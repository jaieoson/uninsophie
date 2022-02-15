import Image from 'next/image'

import audiOff from '../public/img/icon-audio-off.png'
import audioPlay from '../public/img/icon-audio.png'


import { useEffect, useRef, useState } from "react";


function Player() {

    const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  function setPlayingState(state) {
    setIsPlaying(state)
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }

  useEffect(()=> {
    if (!audioRef.current) {
        return;
    }

    if (isPlaying) {
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div>
      <div>
          {isPlaying ? (
              <button onClick={toggleIsPlaying}>
                <Image src={audioPlay} width={30} height={30} />
              </button>
            ): (
              <button onClick={toggleIsPlaying}>

                  <Image src={audiOff} width={30} height={30} />
                
                </button>
            )
            }

           
      </div>
      <audio 
          src='/audio/canto1.mp3' 
          autoPlay={true} 
          ref={audioRef}
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
      />




    </div>
  )


  }

  export default Player
  