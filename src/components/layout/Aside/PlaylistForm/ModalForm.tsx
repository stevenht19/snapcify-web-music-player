import { Modal, ModalHeader } from '@/components/atoms/Modal'

const ModalForm = ({
  show,
  children,
  onClose
}: {
  show: boolean
  children: React.ReactNode
  onClose: () => void
}) => {
  if (!show) return null

  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        Create a new playlist
      </ModalHeader>
      {children}
    </Modal>
  )
}

export default ModalForm