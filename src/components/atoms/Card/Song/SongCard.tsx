import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import SongTrack from './Song'
import './style.css'

type Props = {
  song: Song
}

const SongCard = ({ song }: Props) => {
  const { onPlay } = useMusicPlayer()

  const onClick = () => {
    onPlay(song)
  }

  return (
    <div className='song-card' onClick={onClick}>
      <button>
        {
          song.isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="#7434DB"
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
  )
}

export default SongCard