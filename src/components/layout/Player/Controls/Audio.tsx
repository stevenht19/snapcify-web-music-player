import { Song } from '@/models/Song'
import { SliderValues } from './utils/types'
import { useAudio } from '../hooks'

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

  const ref = useAudio(play, isSliding, barTime, volume)

  const xmax = ref.current?.duration

  const onLoaded = () => {
    if (!ref.current) return
    const x = ref.current.currentTime
    onChangeTime({ x: x, xmax: xmax! })
  }

  const onTimeUpdate = () => {
    if ((!ref.current) || (isSliding && barTime >= 0)) return
    const x = ref.current.currentTime
  
    onChangeTime({ x: x, xmax: xmax! })
  }

  const onPause = () => {
    onEnded(selectedSong, category)
  }

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
