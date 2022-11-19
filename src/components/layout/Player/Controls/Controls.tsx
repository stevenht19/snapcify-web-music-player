import { useMusicPlayer } from '@/hooks'
import { useControls } from '../hooks/useControls'
import Bar from './Bar'
import Audio from './Audio'
import Volume from './Volume'

const Controls = ({ children }: {
  children: React.ReactNode
}) => {
  const {
    play,
    onPlay,
    isDisabled, 
    selectedSong,
    category,
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
      {children}
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
            category={category}
            barTime={barTime}
            isSliding={isSliding}
            volume={volume}
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