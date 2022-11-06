import { useMusicPlayer } from '@/hooks'
import { useControls } from '../hooks/useControls'
import Buttons from './Buttons'
import Bar from './Bar'
import Audio from './Audio'
import Volume from './Volume'

const Controls = () => {
  const {
    play, 
    onPlay,
    isDisabled, 
    selectedSong, 
    fromCarousel 
  } = useMusicPlayer()

  const {
    currentTime,
    barTime,
    volume,
    isSliding,
    onChangeSlide,
    onChangeTime,
    onChangeVolume,
    onDragEnd
  } = useControls()

  return <>
    <div className='player__controls'>
      <Buttons
        play={play}
        isDisabled={isDisabled}
        onPlay={onPlay}
        fromCarousel={fromCarousel}
        selectedSong={selectedSong}
      />
      <Bar
        isDisabled={isDisabled}
        onChangeSlide={onChangeSlide}
        onDragEnd={onDragEnd}
        {...currentTime}
      />
      {
        (!!selectedSong && !isDisabled) ?
          <Audio
            play={play}
            barTime={barTime}
            isSliding={isSliding}
            volume={volume}
            fromCarousel={fromCarousel}
            selectedSong={selectedSong}
            onChangeTime={onChangeTime}
            onEnded={onPlay}
          /> : null
      }
    </div>
    {
      !isDisabled ? (
        <Volume
          volume={volume}
          onChangeVolume={onChangeVolume}
        />
      ) : null
    }
  </>
}

export default Controls