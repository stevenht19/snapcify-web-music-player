import { useToast } from './hooks'
import { Song } from '@/models/Song'
import { Track } from '@/components/atoms/Card/Song'
import { Alert } from '@/components/atoms/Alert'
import { Heart } from '@/components/atoms/Icon'

type Props = {
  play: boolean,
  song: Song,
  handleFavorite(song: Song): void
}

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
          <Alert {...contentState} /> 
        : null
      }
      <button onClick={onClick}>
        <Heart isFilled={song.isFavorite} />
      </button>
    </div>
  )
}

export default SongTrack