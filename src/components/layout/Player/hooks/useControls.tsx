import { useCallback, useState } from 'react'

type TimeState = {
  x: number,
  xmax: number
}

export const useControls = () => {
  const [currentTime, setCurrentTime] = useState<TimeState>({ x: 0, xmax: 0 })
  const [barTime, setBarTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.75)
  const [isSliding, setIsSliding] = useState<boolean>(false)

  const onSetTotalTime = ({ x, xmax }: TimeState) => {
    setCurrentTime({
      x,
      xmax
    })
  }

  const onChangeVolume = (x: TimeState['x']) => {
    setVolume(x / 100)
  }

  const onChangeSlide = (x: TimeState['x']) => {
    setBarTime(x)

    setCurrentTime({
      ...currentTime, 
      x
    })
    setIsSliding(true)
  }

  const onDragEnd = () => {
    setIsSliding(false)
  }

  return {
    currentTime,
    barTime,
    volume,
    isSliding,
    onChangeSlide,
    onSetTotalTime,
    onChangeVolume,
    onDragEnd
  }
}
