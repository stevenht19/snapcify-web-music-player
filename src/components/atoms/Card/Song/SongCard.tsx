import { BiPlay, BiPause } from 'react-icons/bi'
import { Song } from '@/models/Song'
import { RightIcon } from './RightIcon'
import SongTrack from './SongTrack'
import './style.css'

type VoidFunction = (song: Song) => void

type Props = {
  song: Song
  rightIcon?: React.ReactElement
  handlePlay?: VoidFunction
  onSelect?: VoidFunction
  rightIconAction?: VoidFunction
}

const SongCard = ({
  song,
  handlePlay,
  onSelect,
  rightIcon,
  rightIconAction
}: Props) => {

  const isSelected = song.isSelected ? ' song-card--selected' : ''

  const onClick = () => {
    if (handlePlay) {
      handlePlay(song)
      return
    }
    onSelect!(song)
  }

  return (
    <div className={'song-card' + isSelected}>
      <div className='song__info' onClick={onClick}>
        {
          handlePlay && (
            <button>
            {
              song.isPlaying ? (
                <BiPause
                  size='2.3rem'
                  color='var(--primary)' 
                />
              )
              : (
                <BiPlay
                  size='2.1rem'
                  color='var(--white)' 
                />
              )
            }
            </button>
          )
        }
      <SongTrack {...song} />
      </div>
      {
        rightIcon ? (
          <RightIcon onClick={() => rightIconAction!(song)}>
            {rightIcon}
          </RightIcon>
        ) : null
      }
    </div>
  )
}

export default SongCard