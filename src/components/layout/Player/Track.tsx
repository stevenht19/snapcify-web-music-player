import { useMusicPlayer } from '@/hooks'
import { Track } from '@/components/atoms/Card'
import Heart from '@/components/atoms/Icon/Heart'

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