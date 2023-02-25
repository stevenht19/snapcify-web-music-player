import { Routes } from '@/utils/routes'
import { AiOutlineCloud } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { NavItem } from './NavItem'
import { Playlists } from './Playlists'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav__list'>
        <NavItem path={Routes.HOME}>
          <AiOutlineCloud className='item__icon' />
          Explore
        </NavItem>
        <NavItem path={Routes.FAVORITE}>
          <FaRegHeart 
            className='item__icon' 
            size={'1.6rem'} 
          />
          Favorites
        </NavItem>
        <NavItem path={Routes.README}>
          <IoMdInformationCircleOutline className='item__icon' />
          Readme
        </NavItem>
        <Playlists />
      </ul>
    </nav>
  )
}
export default Navbar