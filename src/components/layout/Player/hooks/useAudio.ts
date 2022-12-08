import { useRef, useEffect } from 'react'

const useAudio = (
  play: boolean, 
  isSliding: boolean, 
  barTime: number,
  volume: number
) => {
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

  return ref
}
export default useAudio