import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import { MusicPlayerState } from '@/types'
import Heart from '@/components/atoms/Icon/Heart'
import SongTrack from './Song'
import './style.css'

type Props = {
  song: Song
  category: MusicPlayerState['categorie']
  handleFavoritePlay?: (_song: Song) => void
  onDeleteFavorite?: (_song: Song) => void
}

const SongCard = ({ 
  song, 
  category,
  handleFavoritePlay,
  onDeleteFavorite,
}: Props) => {
  const { onPlay, handleFavorite } = useMusicPlayer()

  const onClick = () => {
    if (!handleFavoritePlay) {
      onPlay(song, category)
      return
    }
    handleFavoritePlay(song)
  }

  const onToggle = () => {
    if (!onDeleteFavorite) {
      handleFavorite(song)
      return
    }
    console.log('se ejectua ñ', category)
    onDeleteFavorite(song)
  }

  return (
    <div className='song-card'>
      <div onClick={onClick}>
        <button>
          {
            song?.isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="var(--primary)"
              >
                <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
              </svg>
            )
              : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="rgba(255, 255, 255, 0.87)"
                >
                  <path d="M7 6v12l10-6z"></path>
                </svg>
              )
          }
        </button>
        <SongTrack {...song} />
      </div>
      <button className='favorite-button' onClick={onToggle}>
        <Heart isFilled={song.isFavorite} />
      </button>
    </div>
  )
}

export default SongCard