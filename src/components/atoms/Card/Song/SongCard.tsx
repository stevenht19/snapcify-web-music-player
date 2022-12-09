import { Song } from '@/models/Song'
import SongTrack from './SongTrack'
import './style.css'

type Props = {
  song: Song
  handlePlay?(_song: Song): void
  onSelect?(_song: Song): void
}

const SongCard = ({
  song,
  handlePlay,
  onSelect
}: Props) => {

  const isSelected = song.isSelected

  const onClick = () => {
    if (handlePlay) {
      handlePlay(song)
      return
    }
    onSelect!(song)
  }

  return (
    <div 
      onClick={onClick} 
      className={'song-card' + (isSelected ? ' song-card--selected' : '')}
    >
      {
        handlePlay && (
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
        )
      }
      <SongTrack {...song} />
    </div>
  )
}

export default SongCard