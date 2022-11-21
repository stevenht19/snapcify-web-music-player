import './style.css'

const Message = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <p className='message'>{children}</p>
  )
}

export default Message