import { FavoriteIcon } from '@/components/atoms/Icon'
import { NavItem } from './NavItem'
import { Playlists } from './Playlists'
import { Routes } from '@/utils/routes'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav__list'>
        <NavItem path={Routes.HOME}>
          <CloudIcon />
          Explore
        </NavItem>
        <NavItem path={Routes.FAVORITE}>
          <FavoriteIcon />
          Favorites
        </NavItem>
        <NavItem path={Routes.README}>
          <InfoIcon />
          Readme
        </NavItem>
        <Playlists />
      </ul>
    </nav>
  )
}

const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill='var(--gray500)'
    stroke='var(--gray500)'
  >
    <path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 00-3.056-3.888zM18 17H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2z"></path>
  </svg>
)

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill='var(--gray500)'
    stroke='var(--gray500)'
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
  </svg>
)

export default Navbar