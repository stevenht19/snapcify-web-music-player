const ModalBody = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <p className='modal__body'>
      {children}
    </p>
  )
}

export default ModalBody