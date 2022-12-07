import { useToast } from './hooks'
import { Song } from '@/models/Song'
import { SongTrack as Track } from '@/components/atoms/Card/Song'
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

  const { isClicked, onShow } = useToast()

  const message = song.isFavorite ? (
    'was added to your favorites'
  ) : (
    'was removed from your favorites'
  )

  const onClick = () => {
    handleFavorite(song)
    onShow()
  }

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...song}
      />
      <Alert
        show={isClicked}
        item={song.title}
      >
        {message}
      </Alert>
      <button onClick={onClick}>
        <Heart isFilled={song.isFavorite} />
      </button>
    </div>
  )
}

export default SongTrack