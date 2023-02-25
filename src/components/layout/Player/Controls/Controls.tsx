import { useMusicPlayer } from '@/hooks'
import { useControls } from '../hooks'
import { Bar } from './Bar'
import { Audio } from './Audio'
import { Volume } from './Volume'

const Controls = ({ children }: {
  children: React.ReactNode
}) => {
  const {
    play,
    isDisabled, 
    selectedSong,
    category,
    onSaveNext
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
        (!!selectedSong && !isDisabled && category) ?
          <Audio
            play={play}
            category={category}
            barTime={barTime}
            isSliding={isSliding}
            volume={volume}
            selectedSong={selectedSong}
            onChangeTime={onChangeTime}
            onEnded={onSaveNext}
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