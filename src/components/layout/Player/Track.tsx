import { useToast } from './hooks'
import { Song } from '@/models/Song'
import { Track } from '@/components/atoms/Card/Song'
import { Heart } from '@/components/atoms/Icon'
import { Suspense, lazy } from 'react'

type Props = {
  play: boolean,
  song: Song,
  handleFavorite(song: Song): void
}

const Alert = lazy(() => import('@/components/atoms/Alert'))

const SongTrack = ({
  play,
  song,
  handleFavorite
}: Props) => {
  const { 
    contentState, 
    setToast, 
    isClicked 
  } = useToast()

  const onClick = () => {
    handleFavorite(song)
    setToast({
      title: song.title,
      message: song.isFavorite 
        ? 'was removed from your favorites' 
        : 'was added to your favorites'
    })
  }

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...song}
      />
      {
        (isClicked && contentState?.title) ?
          <Suspense fallback={null}>
            <Alert {...contentState} /> 
          </Suspense>
        : null
      }
      <button onClick={onClick}>
        <Heart isFilled={song.isFavorite} />
      </button>
    </div>
  )
}

export default SongTrack