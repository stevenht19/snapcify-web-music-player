import Song from './Song'
import './style.css'

const SongItem = () => {
  const random = Math.random() * 5

  return (
    <div className='song-card'>
      {
        random > 4 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
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
      <Song />
      <span className='song__duration'>
        3:21
      </span>
    </div>
  )
}

export default SongItem