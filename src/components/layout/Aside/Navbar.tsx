import { FavoriteIcon } from '@/components/atoms/Icon'
import { Link } from 'react-router-dom'
import Playlists from './Playlists'

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar__list'>
        <li>
          <Link to='/' className='navbar__item'>
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
            Explore
          </Link>
        </li>
        <li>
          <Link to='/favorites' className='navbar__item'>
            <FavoriteIcon />
            Favorites
          </Link>
        </li>
        <Playlists />
      </ul>
    </nav>
  )
}

export default Navbar