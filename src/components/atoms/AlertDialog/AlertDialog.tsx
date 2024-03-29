import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from '../Modal'
import { Button } from '../Button'

type Props = {
  isOpen: boolean
  title: string
  onClose(): void
  onConfirm(): void
}

const AlertDialog: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  title
}) => {
  if (!isOpen) return null
 
  return (
    <Modal show={isOpen}>
      <ModalHeader text={title} />
      <ModalBody>
        Are you sure? You can't undo this action afterwards.
      </ModalBody>
      <ModalFooter>
        <Button 
          isGray 
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm}>
          Accept
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AlertDialog