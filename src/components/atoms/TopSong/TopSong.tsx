import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import './style.css'

const Album = ({ title, artist, image }: Song) => {
  return (
    <div className='top-card'>
      <div className='top__cover'>
        <button className='top__play'>
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
        </button>
        <img
          className='top__image'
          src={image}
          alt='Album name'
        />
      </div>
      <h2 className='top__title'>{title}</h2>
      <span className='top__artist'>{artist}</span>
    </div>
  )
}

export default Album