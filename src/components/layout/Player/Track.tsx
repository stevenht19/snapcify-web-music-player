import { useMusicPlayer } from '@/hooks'
import { Song } from '@/components/atoms/Song'

const Track = () => {
  const { play, selectedSong } = useMusicPlayer()

  if (!selectedSong) return null

  return (
    <div className='player__track'>
      <Song
        rotate={play}
        {...selectedSong}
      />
    </div>
  )
}

export default Track