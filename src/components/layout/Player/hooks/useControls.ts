import { useState } from 'react'
import { SliderValues } from '../Controls/utils/types'

const useControls = () => {
  const [currentTime, setCurrentTime] = useState<SliderValues>({ x: 0, xmax: 0 })
  const [barTime, setBarTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.10)
  const [isSliding, setIsSliding] = useState<boolean>(false)

  const onChangeTime = ({ x, xmax }: SliderValues): void => {
    setCurrentTime({
      x,
      xmax
    })
  }

  const onChangeVolume = (x: SliderValues['x']) => {
    setVolume(x / 100)
  }

  const onChangeSlide = (x: SliderValues['x']) => {
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
export default useControls