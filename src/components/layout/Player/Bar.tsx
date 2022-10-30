import Slider from 'react-input-slider'

type SliderEvent = {
  x: number
  xmax: number
}

type Props = {
  x: SliderEvent['x'],
  xmax: SliderEvent['xmax'],
  onChangeSlide: (x: number) => void
  onDragEnd: () => void
}

const getCurrentTime = (x: number): string => {
  return Math.floor(x / 60) + ':' + ('0' + Math.floor(x % 60)).slice(-2)
}

const Bar = ({ 
  x, 
  xmax, 
  onChangeSlide, 
  onDragEnd 
}: Props) => {
  const currentTime = getCurrentTime(x)
  const end = ((xmax / 60) - 0.21).toFixed(2).replace('.', ':')
  
  const onChange = (e: { x: number, y: number }) => {
    onChangeSlide(e.x)
  }

  return (
    <div className='bar'>
      <span className='bar__time'>{currentTime}</span>
      <Slider
        axis='x'
        x={x} 
        xmax={Math.floor(xmax)} 
        onChange={onChange}
        onDragEnd={onDragEnd}
        styles={{
          track: {
            backgroundColor: 'var(--gray100)',
          },
          active: {
            background: 'var(--primary)'
          },
        }}
      />
      <span className='bar__time'>{end}</span>
    </div>
  )
}

export default Bar