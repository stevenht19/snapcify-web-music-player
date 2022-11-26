import ReactPortal from '../Portal'
import './style.css'

const Modal = ({ children }: {
  children: React.ReactNode
}) => {
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