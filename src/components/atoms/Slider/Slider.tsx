import Slider from 'react-input-slider'

type Props = {
  x: number
  xmax: number
  trackColor?: string
  activeColor?: string
  thumbColor?: string
  onDragEnd?: () => void
  onChange: (e: { x: number, y: number }) => void
}

const InputSlider = ({
  x, 
  xmax, 
  onChange, 
  onDragEnd, 
  trackColor, 
  activeColor, 
  thumbColor
}: Props) => {
  return (
    <Slider
      axis='x'
      x={x}
      xmax={Math.floor(xmax)} 
      onChange={onChange}
      onDragEnd={onDragEnd}
      styles={{
        ...(trackColor && { track: { backgroundColor: trackColor }}),
        ...(activeColor && { active: { backgroundColor: activeColor }}),
        ...(thumbColor && { thumb: { backgroundColor: thumbColor }}),
      }}
    />
  )
}

export default InputSlider