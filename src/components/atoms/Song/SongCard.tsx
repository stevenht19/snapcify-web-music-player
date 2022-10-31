import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import SongTrack from './Song'
import './style.css'

const SongCard = (props: Song) => {
  const { selectedSong, onPlay } = useMusicPlayer()

  const onClick = () => {
    onPlay(props, selectedSong.url !== props.url)
  }

  return (
    <div className='song-card' onClick={onClick}>
      <div>
        {
          props.isPlaying ? (
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
      </div>
      <SongTrack {...props} />
    </div>
  )
}

export default SongCard