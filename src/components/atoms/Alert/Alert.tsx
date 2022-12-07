import { ReactPortal } from '../Portal'
import { AlertProps } from './types'
import './style.css'

const Alert = ({ title, message }: AlertProps)=> {
  return (
    <ReactPortal>
      <div className='alert'>
        <p>{title} {message}</p>
      </div>
    </ReactPortal>
  )
}

export default Alert