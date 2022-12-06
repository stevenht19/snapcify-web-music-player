import { Modal, ModalHeader, ModalBody, ModalFooter } from '../Modal'
import { Button } from '../Button'

const AlertDialog = ({ isOpen, onClose, onConfirm }: {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}) => {

  if (!isOpen) return null

  return (
    <Modal>
      <ModalHeader>
        Delete Playlist
      </ModalHeader>
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