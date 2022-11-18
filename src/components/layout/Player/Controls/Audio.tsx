import { useEffect, useRef } from 'react'
import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type Props = {
  play: MusicPlayerState['play']
  category: MusicPlayerState['category']
  selectedSong: Song
  isSliding: boolean
  volume: number
  barTime: number
  onEnded: (_song: Song, _cat: MusicPlayerState['category'], _songs?: Song[]) => void
  onChangeTime: (_: { x: number, xmax: number }) => void
}

const Audio = ({ 
  play,
  volume,
  category,
  isSliding,
  selectedSong, 
  barTime,
  onChangeTime,
  onEnded
}: Props) => {
  const ref = useRef<HTMLAudioElement>(null)
  
  if (ref.current) {
    play ? ref.current.play() : ref.current.pause()
  }

  useEffect(() => {
    if (!isSliding) {
      ref.current && (ref.current.currentTime = barTime)
    }
  }, [barTime, isSliding])

  useEffect(() => {
    ref.current && (ref.current.volume = volume)
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
      x: ref.current?.currentTime,
      xmax: ref.current?.duration
    })
  }

  const onPause = () => {
    onEnded(selectedSong, category)
  }

  return (
    <audio
      ref={ref}
      controls={false}
      src={selectedSong.url}
      onLoadedMetadata={onLoaded}
      onTimeUpdate={onTimeUpdate}
      onEnded={onPause}
    />
  )
}

export default Audio