import { useEffect, useRef } from 'react'
import { Song } from '@/models'

type Props = {
  play: boolean
  isSliding: boolean
  selectedSong: Song
  barTime: number
  onSetTotalTime: (_: { x: number, xmax: number }) => void
}

const Audio = ({ 
  play, 
  selectedSong, 
  barTime, 
  isSliding, 
  onSetTotalTime 
}: Props) => {
  const ref = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    if (!ref.current) return
    if (play) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [play, selectedSong])

  useEffect(() => {
    if (ref.current && !isSliding) {
      ref.current.currentTime = barTime
    }
  }, [barTime, isSliding])

  const onLoadedSong = () => {
    if (!ref.current) return
    console.log(ref.current.duration)
    console.log(ref.current)
    onSetTotalTime({ 
      x: ref.current.currentTime, 
      xmax: ref.current.duration
    })
  }

  const onTimeUpdate = () => {
    if (!ref.current) return
    if (isSliding && barTime > 0) return
    onSetTotalTime({
      x: ref.current?.currentTime,
      xmax: ref.current?.duration
    })
  }

  return (
    <audio
      ref={ref}
      src={selectedSong.url}
      onLoadedMetadata={onLoadedSong}
      onTimeUpdate={onTimeUpdate}
    />
  )
}

export default Audio