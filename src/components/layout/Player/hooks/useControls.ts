import { useState } from 'react'

type TimeState = {
  x: number,
  xmax: number
}

export const useControls = () => {
  const [currentTime, setCurrentTime] = useState<TimeState>({ x: 0, xmax: 0 })
  const [barTime, setBarTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.10)
  const [isSliding, setIsSliding] = useState<boolean>(false)

  const onChangeTime = ({ x, xmax }: TimeState): void => {
    setCurrentTime({
      x,
      xmax
    })
  }

  const onChangeVolume = (x: TimeState['x']): void => {
    setVolume(x / 100)
  }

  const onChangeSlide = (x: TimeState['x']): void => {
    setBarTime(x)
    setCurrentTime({
      ...currentTime, 
      x
    })
    setIsSliding(true)
  }

  const onDragEnd = (): void => {
    setIsSliding(false)
  }

  return {
    currentTime,
    barTime,
    volume,
    isSliding,
    onChangeSlide,
    onChangeTime,
    onChangeVolume,
    onDragEnd
  }
}
