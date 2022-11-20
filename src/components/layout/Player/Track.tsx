import { useMusicPlayer, useBoolean } from '@/hooks'
import { SongTrack as Track } from '@/components/atoms/Card/Song'
import { Heart } from '@/components/atoms/Icon'
import ReactPortal from '@/components/atoms/Portal'

const SongTrack = () => {
  const { play, selectedSong, handleFavorite } = useMusicPlayer()
  const { boolean, onToggle } = useBoolean(selectedSong?.isFavorite || false)

  if (!selectedSong) return null

  const onClick = () => {
    handleFavorite(selectedSong)
    onToggle()
  }

  return (
    <div className='player__track'>
      <Track
        rotate={play}
        {...selectedSong}
      />
      {
        boolean ? (
          <ReactPortal>
            Hooolaaaaaaaaaaaaaaaaa
          </ReactPortal>
        ) : null
      }
      <button onClick={onClick}>
        <Heart isFilled={selectedSong.isFavorite} />
      </button>
    </div>
  )
}

export default SongTrack