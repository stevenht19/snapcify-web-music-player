import { useMusicPlayer } from '@/hooks'
import { Track } from '@/components/atoms/Card'
import Heart from '@/components/atoms/Icon/Heart'

const SongTrack = () => {
  const { play, selectedSong } = useMusicPlayer()

  if (!selectedSong) return null

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...selectedSong}
      />
      <Heart isFilled={selectedSong.isFavorite} />
    </div>
  )
}

export default SongTrack