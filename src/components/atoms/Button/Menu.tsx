const Menu = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <ul className='menu'>
      {children}
    </ul>
  )
}

const MenuItem = ({ action, children }: {
  action: () => void
  children: React.ReactNode
}) => {
  return (
    <li className='menu__item'>
      <button type='button' onClick={action}>
        {children}
      </button>
    </li>
  )
}

Menu.Item = MenuItem
export default Menu