import { Suspense, lazy } from 'react'
import { useMusicPlayer } from '@/hooks'
import Controls from './Controls'
import Buttons from './Controls/Buttons'
import './style.css'

const Track = lazy(() => import('./Track'))

const Player = () => {
  const {
    play,
    isDisabled, 
    selectedSong,
    category,
    onPrevious,
    onPlay,
    onNext,
    handleFavorite,
  } = useMusicPlayer()

  return (
    <div className='player'>
      {
        selectedSong ?
          <Suspense fallback={null}>
            <Track
              play={play}
              song={selectedSong}
              handleFavorite={handleFavorite}
            />
          </Suspense>
        : null
      }
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