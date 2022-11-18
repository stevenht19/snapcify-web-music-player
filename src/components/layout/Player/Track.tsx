import { useMusicPlayer } from '@/hooks'
import { SongTrack as Track } from '@/components/atoms/Card/Song'
import { Heart } from '@/components/atoms/Icon'

const SongTrack = () => {
  const { play, selectedSong, handleFavorite } = useMusicPlayer()

  if (!selectedSong) return null

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...selectedSong}
      />
      <button onClick={() => handleFavorite(selectedSong)}>
        <Heart isFilled={selectedSong.isFavorite} />
      </button>
    </div>
  )
}

export default SongTrack