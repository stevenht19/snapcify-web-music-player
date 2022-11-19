import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar__list'>
        <li>
          <Link to='/' className='navbar__item'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            Explore
          </Link>
        </li>
        <li>
          <Link to='/artists' className='navbar__item'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="var(--white)"
            >
              <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm9 11v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1h2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"></path>
            </svg>
            Artists
          </Link>
        </li>
        <li>
          <Link to='/favorites' className='navbar__item'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="var(--white)"
            >
              <path d="M20.205 4.791a5.938 5.938 0 00-4.209-1.754A5.906 5.906 0 0012 4.595a5.904 5.904 0 00-3.996-1.558 5.942 5.942 0 00-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
            </svg>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar