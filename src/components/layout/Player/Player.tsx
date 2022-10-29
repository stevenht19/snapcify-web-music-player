import { Song } from '@/components/atoms/Song'
import usePlayerContext from '@/hooks/useMusicPlayer'
import Buttons from './Buttons'
import Volume from './Volume'
import Bar from './Bar'
import Audio from './Audio'
import './style.css'

const Player = () => {
  const { play, selectedSong, onPlay } = usePlayerContext()
  
  if (!selectedSong.id) return

  return (
    <div className='player'>
      <Song 
        {...selectedSong} 
        rotate={play} 
      />
      <div className='player__controls'>
        <Buttons
          play={play}
          onPlay={onPlay}
          selectedSong={selectedSong}
        />
        <Bar />
        <Audio 
          play={play} 
          selectedSong={selectedSong} 
        />
      </div>
      <Volume />
    </div>
  )
}

export default Player