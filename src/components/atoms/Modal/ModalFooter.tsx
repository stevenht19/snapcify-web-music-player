const ModalFooter = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <footer className='modal__footer'>
      {children}
    </footer>
  )
}

export default ModalFooter