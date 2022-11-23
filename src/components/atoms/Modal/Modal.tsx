import ReactPortal from '../Portal'
import './style.css'

const Modal = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <ReactPortal>
      <div className='modal'>
        {children}
      </div>
    </ReactPortal>
  )
}

export default Modal