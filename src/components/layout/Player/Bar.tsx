import Slider from '@/components/atoms/Slider'

type SliderEvent = {
  x: number
  y: number
}

type Props = {
  x: SliderEvent['x']
  xmax: number
  onDragEnd: () => void
  onChangeSlide: (x: number) => void
}

const getCurrentTime = (x: number): string => {
  return Math.floor(x / 60) + ':' + ('0' + Math.floor(x % 60)).slice(-2)
}

const Bar = ({ 
  x, 
  xmax,
  onDragEnd,
  onChangeSlide 
}: Props) => {
  const currentTime = getCurrentTime(x)
  const end = ((xmax / 60) - 0.21).toFixed(2).replace('.', ':')
  
  const onChange = (e: SliderEvent) => {
    onChangeSlide(e.x)
  }

  return (
    <div className='bar'>
      <span className='bar__time'>{currentTime}</span>
      <Slider 
        x={x}
        xmax={Math.floor(xmax)}
        onChange={onChange}
        onDragEnd={onDragEnd}
        trackColor={'var(--gray100)'}
        activeColor={'var(--primary)'}
        thumbColor={'var(--primary)'}
      />
      <span className='bar__time'>{end}</span>
    </div>
  )
}

export default Bar