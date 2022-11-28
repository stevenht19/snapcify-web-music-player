const ModalTitle = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <h2 className='modal__title'>{children}</h2>
  )
}

export default ModalTitle