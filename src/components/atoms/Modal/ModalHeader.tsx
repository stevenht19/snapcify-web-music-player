import { Close } from '../Icon'
import ModalTitle from './ModalTitle'

type Props = {
  children: React.ReactNode
  onClose?: () => void
}

const ModalHeader = ({ children, onClose }: Props) => {
  return (
    <header className='modal__heading'>
      <ModalTitle>
        {children}
      </ModalTitle>
      {
        onClose ? (
          <button
            type='button'
            className='heading__close'
            onClick={onClose}
          >
            <Close />
          </button>
        ) : null
      }
    </header>
  )
}

export default ModalHeader