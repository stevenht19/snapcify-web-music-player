import { useEffect, useRef } from 'react'
import { Song } from '@/models'

type Props = {
  play: boolean,
  selectedSong: Song
}

const Audio = ({ play, selectedSong }: Props) => {
  const ref = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!selectedSong || !ref.current) return
    
    if (play) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [play, selectedSong])

  return (
    <audio
      ref={ref}
      src={selectedSong.url}
    />
  )
}

export default Audio