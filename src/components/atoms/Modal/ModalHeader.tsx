import { Close } from '../Icon'

type Props = {
  children: React.ReactNode
  onClose?: () => void
}

const ModalHeader = ({ children, onClose }: Props) => {
  return (
    <div className='modal__heading'>
      <h2>{children}</h2>
      <button 
        type='button' 
        className='heading__close'
        onClick={onClose}
      >
        <Close />
      </button>
    </div>
  )
}

export default ModalHeader