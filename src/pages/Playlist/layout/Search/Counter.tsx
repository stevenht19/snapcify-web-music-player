import './style.css'

export const Counter = ({ value }: { 
  value: number 
}) => {
  if (value === 0) return null

  return (
    <div className='counter'>
      {value}
    </div>
  )
}
