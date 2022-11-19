import { useMusicPlayer } from '@/hooks'
import Controls from './Controls'
import Buttons from './Controls/Buttons'
import Track from './Track'
import './style.css'

const Player = () => {
  const {
    play,
    isDisabled, 
    selectedSong,
    category,
    onPrevious,
    onPlay,
    onNext,
  } = useMusicPlayer()

  return (
    <div className='player'>
      <Track />
      <Controls>
        <Buttons
          play={play}
          category={category}
          isDisabled={isDisabled}
          onPrevious={onPrevious}
          onPlay={onPlay}
          onNext={onNext}
          selectedSong={selectedSong}
        />
      </Controls>
    </div>
  )
}

export default Player