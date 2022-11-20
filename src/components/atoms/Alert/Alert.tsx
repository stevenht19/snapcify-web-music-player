import ReactPortal from '../Portal'
import './style.css'

const Alert = ({ show, item, children }: {
  show: boolean
  item: string
  children: React.ReactNode
}) => {
  if (!show) return null

  return (
    <ReactPortal>
      <div className='alert'>
        <p>{item} {children}</p>
      </div>
    </ReactPortal>
  )
}

export default Alert