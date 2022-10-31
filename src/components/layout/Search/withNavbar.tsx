import { useState } from 'react'

const withNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const onToggle = () => {
    setIsOpen(bool => !bool)
  }

  return (
    <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--white)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>

      </button>
    </div>
  )
}

export default withNavbar