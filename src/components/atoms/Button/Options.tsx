import { useBoolean } from '@/hooks'
import './style.css'

const Options = ({ children }: {
  children: React.ReactNode
}) => {
  const { boolean, onToggle } = useBoolean()
  
  return (
    <div className='options'>
      <button 
        type='button' 
        onClick={onToggle}
        className='options__menu'
      >
        <Icon />
      </button>
      { boolean ? children : null }
    </div>
  )
}

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width={40} 
    height={40} 
    fill='var(--white)'
    stroke='var(--white)'
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    className="w-6 h-6"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
    />
  </svg>
)

export default Options