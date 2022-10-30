import { useCallback, useState } from 'react'

type TimeState = {
  x: number,
  xmax: number
}


export const useControls = () => {
  const [currentTime, setCurrentTime] = useState<TimeState>({ x: 0, xmax: 0 })
  const [barTime, setBarTime] = useState<number>(0)
  const [isSliding, setIsSliding] = useState(false)


  const onSetTotalTime = (time: TimeState) => {
    setCurrentTime({
      x: time.x,
      xmax: time.xmax
    })
  }

  const onChangeSlide = (x: number) => {
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
    isSliding,
    onChangeSlide,
    onSetTotalTime,
    onDragEnd
  }
}
