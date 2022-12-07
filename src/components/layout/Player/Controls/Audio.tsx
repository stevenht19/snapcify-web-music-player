import { useEffect, useRef } from 'react'
import { Song } from '@/models/Song'
import { SliderValues } from './utils/types'

type Props = {
  play: boolean
  category: string
  isSliding: boolean
  volume: number
  barTime: number
  selectedSong: Song
  onEnded(_song: Song, _cat: string, _songs?: Song[]): void
  onChangeTime(e: SliderValues): void
}

export const Audio = ({ 
  play,
  volume,
  category,
  isSliding,
  barTime,
  selectedSong,
  onChangeTime,
  onEnded
}: Props) => {
  const { url } = selectedSong

  const ref = useRef<HTMLAudioElement>(null)
  
  if (ref.current) {
    play ? ref.current.play() : ref.current.pause()
  }

  useEffect(() => {
    if (!isSliding && ref.current) {
      ref.current.currentTime = barTime
    }
  }, [barTime, isSliding])

  useEffect(() => {
    ref.current && (
      ref.current.volume = volume
    )
  }, [volume])

  const onLoaded = () => {
    if (!ref.current) return
    onChangeTime({ 
      x: ref.current.currentTime, 
      xmax: ref.current.duration
    })
  }

  const onTimeUpdate = () => {
    if ((!ref.current) || (isSliding && barTime >= 0)) return

    onChangeTime({
      x: ref.current.currentTime,
      xmax: ref.current.duration
    })
  }

  const onPause = () => onEnded(selectedSong, category)

  return (
    <audio
      ref={ref}
      controls={false}
      src={url}
      onLoadedMetadata={onLoaded}
      onTimeUpdate={onTimeUpdate}
      onEnded={onPause}
    />
  )
}
