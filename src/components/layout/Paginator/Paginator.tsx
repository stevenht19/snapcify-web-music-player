import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md'
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
      <MdOutlineKeyboardArrowRight color='var(--gray400)'/>
      <span>{title}</span>
      <MdOutlineKeyboardArrowDown color='var(--gray100)'/>
    </div>
  )
}

export default Paginator