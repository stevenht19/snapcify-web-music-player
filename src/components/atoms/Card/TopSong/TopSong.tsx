import { Song } from '@/models'
import Artist from '../components/Artist'
import Title from '../components/Title'
import './style.css'

type Props = {
  song: Song,
  handlePlay: (song: Song) => void
  category: 'CAROUSEL'
}

const TopSong = ({ 
  song, 
  handlePlay, 
  category = 'CAROUSEL' 
}: Props) => {
  //const { onPlay } = useMusicPlayer()

  const onClick = () => {
    handlePlay(song)
    //onPlay(song, category)
  }

  return (
    <div className='top-card' onClick={onClick}>
      <div className='top__cover'>
        <button className='top__play'>
          {
            song.isPlaying ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="none"
                stroke="var(--white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-pause-circle"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M10 15L10 9"></path>
                <path d="M14 15L14 9"></path>
              </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="none"
                stroke="var(--white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-play-circle"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M10 8L16 12 10 16 10 8z"></path>
              </svg>
          }
        </button>
        <img
          className='top__image'
          src={song.image}
          alt='Album name'
        />
      </div>
      <Title title={song.title} />
      <Artist artist={song.artist} />
    </div>
  )
}

export default TopSong