import { Modal, ModalHeader } from '@/components/atoms/Modal'

export const ModalForm = ({
  show,
  title,
  children,
  onClose
}: {
  show: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
}) => {
  if (!show) return null

  return (
    <Modal onClose={onClose}>
      <ModalHeader onClose={onClose}>
        {title}
      </ModalHeader>
      {children}
    </Modal>
  )
}
