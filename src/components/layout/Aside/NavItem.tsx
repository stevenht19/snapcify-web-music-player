import { NavLink } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  path?: string
  isNotLink?: boolean
  onClick?: () => void
}

export const NavItem = ({ 
  children, 
  path, 
  isNotLink,
  onClick
}: Props) => {
  return (
    <li 
      {...(isNotLink && { className: 'nav__item'})}
      {...(onClick && { onClick })}
    >
      {
        isNotLink ?
        children
        :
        <NavLink 
          to={path!} 
          className='nav__item'
        >
          {children}
        </NavLink>
      }
    </li>
  )
}