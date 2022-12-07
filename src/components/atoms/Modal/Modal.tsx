import { ReactPortal } from '../Portal'
import { useRef } from 'react'
import './style.css'


type Props = {
  children: React.ReactNode
  onClose(): void
}

const Modal = ({ children, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === ref.current) {
      onClose()
    }
  }

  return (
    <ReactPortal>
      <div 
        className='modal' 
        onClick={onClick}
        ref={ref}
      >
        <div className='modal__box'>
          {children}
        </div>
      </div>
    </ReactPortal>
  )
}

export default Modal