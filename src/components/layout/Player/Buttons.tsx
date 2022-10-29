import { Song } from '@/models'

type Props = {
  play: boolean
  selectedSong: Song
  onPlay: (_song: Song) => void
}

const Buttons = ({
  play,
  onPlay,
  selectedSong
}: Props) => {

  const onPlaySong = () => {
    onPlay(selectedSong)
  }

  return (
    <div className='player__buttons'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30"
        viewBox="0 0 24 24"
        fill="#ffffff"
      >
        <path d="M16 7l-7 5 7 5zm-7 5V7H7v10h2z"></path>
      </svg>
      <button className='player__play' onClick={onPlaySong}>
        {
          play ?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--primary)"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
            >
              <path
                stroke="none"
                d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zm176 0h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"
              ></path>
            </svg>
            :
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="var(--primary)"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
          >
            <path
              stroke="none"
              d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"
            ></path>
          </svg>
        }
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30"
        viewBox="0 0 24 24"
        fill="#ffffff"
      >
        <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
      </svg>
    </div>
  )
}

export default Buttons