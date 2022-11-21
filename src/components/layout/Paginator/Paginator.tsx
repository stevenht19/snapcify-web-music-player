import Icon from './Icon'
import './style.css'

type Props = {
  icon: React.ReactNode
  title: string
}

const Paginator = ({ icon, title }: Props) => {
  return (
    <div className='paginator'>
      <Icon>
        {icon}
      </Icon>
      <span className='paginator__user'>User</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="var(--gray400)"
      >
        <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
      </svg>
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="var(--gray100)"
      >
        <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
      </svg>
    </div>
  )
}

export default Paginator