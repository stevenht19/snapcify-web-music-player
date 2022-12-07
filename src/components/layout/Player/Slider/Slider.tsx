import { SliderValues } from '../Controls/utils/types'
import Slider from 'react-input-slider'

type Props = SliderValues & {
  disabled?: boolean
  trackColor?: string
  activeColor?: string
  thumbColor?: string
  onDragEnd?: () => void
  onChange: (e: { x: number, y: number }) => void
}

const InputSlider = ({
  x, 
  xmax,
  disabled,
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
      disabled={!!disabled}
      onDragEnd={onDragEnd}
      styles={{
        ...(trackColor && { track: { backgroundColor: trackColor }}),
        ...(activeColor && { active: { backgroundColor: activeColor }}),
        ...(thumbColor && { thumb: { backgroundColor: thumbColor }}),
        disabled: {
          opacity: 0.6,
          width: '100%'
        }
      }}
    />
  )
}

export default InputSlider