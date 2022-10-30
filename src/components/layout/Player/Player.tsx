import { useState } from 'react'
import { Song } from '@/components/atoms/Song'
import { useMusicPlayer } from '@/hooks'
import { useControls } from './hooks/useControls'
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
  const { play, selectedSong, onPlay } = useMusicPlayer()
  const { 
    currentTime, 
    barTime, 
    isSliding, 
    onChangeSlide, 
    onSetTotalTime, 
    onDragEnd
  } = useControls()

  if (selectedSong.id === 10) return null

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
        <Bar 
          onChangeSlide={onChangeSlide}
          onDragEnd={onDragEnd}
          {...currentTime}
        />
        <Audio 
          play={play} 
          selectedSong={selectedSong}
          onSetTotalTime={onSetTotalTime}
          onEnded={onPlay}
          isSliding={isSliding}
          barTime={barTime}
        />
      </div>
      <Volume />
    </div>
  )
}

export default Player