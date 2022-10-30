import { useState } from 'react'
import { Song } from '@/components/atoms/Song'
import usePlayerContext from '@/hooks/useMusicPlayer'
import Buttons from './Buttons'
import Volume from './Volume'
import Bar from './Bar'
import Audio from './Audio'
import './style.css'

type TimeState = {
  x: number,
  xmax: number
}

const Player = () => {
  const { play, selectedSong, onPlay } = usePlayerContext()

  const [currentTime, setCurrentTime] = useState<TimeState>({ x: 0, xmax: 0 })
  const [barTime, setBarTime] = useState<number>(0)
  const [isSliding, setIsSliding] = useState(false)

  if (!selectedSong.id) return null

  const onSetTotalTime = (time: TimeState) => {
    setCurrentTime({
      x: time.x,
      xmax: time.xmax
    })
  }

  const onChangeSlide = (x: number) => {
    setBarTime(x)

    setCurrentTime({
      ...currentTime, 
      x
    })
    setIsSliding(true)
  }

  const onDragEnd = () => {
    setIsSliding(false)
  }

  return (
    <div className='player'>
      <Song
        rotate={play}
        {...selectedSong} 
      />
      <div className='player__controls'>
        <Buttons
          play={play}
          onPlay={onPlay}
          selectedSong={selectedSong}
        />
        {
          currentTime.xmax !== 0 &&
          <Bar 
            onChangeSlide={onChangeSlide}
            onDragEnd={onDragEnd}
            {...currentTime}
          />
        }
        <Audio 
          play={play} 
          selectedSong={selectedSong}
          onSetTotalTime={onSetTotalTime}
          isSliding={isSliding}
          barTime={barTime}
        />
      </div>
      <Volume />
    </div>
  )
}

export default Player