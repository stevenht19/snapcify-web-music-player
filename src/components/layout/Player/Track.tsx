import { useMusicPlayer } from '@/hooks'
import { Track } from '@/components/atoms/Card'

const SongTrack = () => {
  const { play, selectedSong } = useMusicPlayer()

  if (!selectedSong) return null

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...selectedSong}
      />
    </div>
  )
}

export default SongTrack