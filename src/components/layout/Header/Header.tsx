import Button from './Button'
import Search from './Search'
import './style.css'

const Header = () => {
  return (
    <header className='header'>
      <Search />
      <Button />
    </header>
  )
}

export default Header