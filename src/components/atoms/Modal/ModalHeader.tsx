import { Close } from '../Icon'
import ModalTitle from './ModalTitle'

type Props = {
  text?: string
  children?: React.ReactNode
  flex?: boolean
  onClose?: () => void
}

const ModalHeader = ({ children, text, onClose }: Props) => {
  return (
    <header className='modal__heading'>
      <ModalTitle>
        {text}
      </ModalTitle>
      {children ? children : null}
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