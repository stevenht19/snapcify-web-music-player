import { useEffect, useRef } from 'react'
import { Song } from '@/models'

type Props = {
  play: boolean
  isSliding: boolean
  barTime: number
  selectedSong: Song
  onEnded: (_song: Song) => void
  onSetTotalTime: (_: { x: number, xmax: number }) => void
}

const Audio = ({ 
  play, 
  selectedSong, 
  barTime,
  isSliding,
  onEnded, 
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

    onSetTotalTime({ 
      x: ref.current.currentTime, 
      xmax: ref.current.duration
    })
  }

  const onTimeUpdate = () => {
    if (!ref.current || isSliding && barTime >= 0) return

    onSetTotalTime({
      x: ref.current?.currentTime,
      xmax: ref.current?.duration
    })
  }

  const onPause = () => {
    onEnded(selectedSong)
  }

  return (
    <audio
      ref={ref}
      src={selectedSong.url}
      onLoadedMetadata={onLoadedSong}
      onTimeUpdate={onTimeUpdate}
      onEnded={onPause}
    />
  )
}

export default Audio