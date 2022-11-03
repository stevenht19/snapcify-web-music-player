import { useState } from 'react'
import Slider from '@/components/atoms/Slider'

type SliderEvent = {
  x: number
  y: number
}

type Props = {
  volume: number
  onChangeVolume: (_n: SliderEvent['x']) => void
}

const totalVolume = 100

const Volume = ({ volume, onChangeVolume }: Props) => {
  const actualVolume = volume * totalVolume
  const [isMuted, setMuted] = useState<boolean>(false)
  const [playerVolume, setPlayerVolume] = useState<number>(actualVolume)

  const onChange = (e: SliderEvent) => {
    onChangeVolume(e.x)
  }

  const onMute = () => {
    if (isMuted) {
      onChangeVolume(playerVolume * totalVolume)
    } else {
      setPlayerVolume(volume)
      onChangeVolume(0)
    }
    setMuted(b => !b)
  }
  
  return (
    <div className='player__volume'>
      <button onClick={onMute} className='volume__button'>
        {
          volume ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="var(--white)"
            >
              <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path>
              <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 001.027.05A1 1 0 0014 20V4a1 1 0 00-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 00.38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 00-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="var(--white)"
            >
              <path d="M21.707 20.293l-2.023-2.023A9.566 9.566 0 0021.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 01-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 00-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 001.027.05A1 1 0 0014 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 00-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 002 9v6c0 1.103.897 2 2 2z"></path>
            </svg>
          )
        }
      </button>
      <Slider
        x={actualVolume}
        xmax={totalVolume}
        onChange={onChange}
        trackColor={'var(--gray100)'}
        activeColor={'var(--primary)'}
      />
    </div>
  )
}

export default Volume