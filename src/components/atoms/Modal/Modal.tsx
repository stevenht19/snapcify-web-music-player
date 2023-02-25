import { ReactPortal } from '../Portal'
import './style.css'


type Props = {
  children: React.ReactNode
  show?: boolean
}

const Modal = ({ 
  children, 
  show
}: Props) => {
  if (!show) return null

  return (
    <ReactPortal>
      <div className='modal'>
        <div className='modal__box'>
          {children}
        </div>
      </div>
    </ReactPortal>
  )
}

export default Modal