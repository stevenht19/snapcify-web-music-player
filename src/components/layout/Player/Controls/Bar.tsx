import { useEffect } from 'react'
import Slider from '@/components/atoms/Slider'

type SliderEvent = {
  x: number
  y: number
}

type Props = {
  x: SliderEvent['x']
  xmax: number
  isDisabled: boolean
  onDragEnd: () => void
  onChangeSlide: (x: number) => void
}

const getCurrentTime = (x: Props['x']): string => {
  return Math.floor(x / 60) + ':' + ('0' + Math.floor(x % 60)).slice(-2)
}

const getDuration = (xmax: Props['xmax']): string => {
  return xmax ? ((xmax / 60) - 0.21).toFixed(2).replace('.', ':') : '0:00'
}

const Bar = ({ 
  x, 
  xmax,
  isDisabled,
  onDragEnd,
  onChangeSlide
}: Props) => {

  const current = x
  const total = xmax

  const onChange = (e: SliderEvent) => {
    onChangeSlide(e.x)
  }

  return (
    <div className='bar'>
      <span className='bar__time'>{getCurrentTime(current)}</span>
      <Slider 
        x={current}
        xmax={Math.floor(total)}
        onChange={onChange}
        disabled={isDisabled}
        onDragEnd={onDragEnd}
        trackColor={'var(--gray100)'}
        activeColor={'var(--primary)'}
        thumbColor={isDisabled ? 'transparent' : 'var(--primary)'}
      />
      <span className='bar__time'>{getDuration(total)}</span>
    </div>
  )
}

export default Bar