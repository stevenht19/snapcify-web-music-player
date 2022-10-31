import { useMusicPlayer } from '@/hooks'
import { useControls } from './hooks/useControls'
import { Song } from '@/components/atoms/Song'
import Buttons from './Buttons'
import Volume from './Volume'
import Bar from './Bar'
import Audio from './Audio'
import './style.css'

const Player = () => {
  const { play, selectedSong, onPlay } = useMusicPlayer()
  const { 
    currentTime, 
    barTime,
    volume,
    isSliding,
    onChangeSlide, 
    onSetTotalTime,
    onChangeVolume,
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
          barTime={barTime}
          isSliding={isSliding}
          volume={volume}
          selectedSong={selectedSong}
          onSetTotalTime={onSetTotalTime}
          onEnded={onPlay}
        />
      </div>
      <Volume 
        volume={volume} 
        onChangeVolume={onChangeVolume} 
      />
    </div>
  )
}

export default Player