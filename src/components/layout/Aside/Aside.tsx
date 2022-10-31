import './style.css'

const Aside = () => {
  return (
    <aside className={'aside'}>
      <h1 className='logo'>
        Snapcify
      </h1>
      <nav className='navbar'>
        <ul>
          <li className='navbar__item'>
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
            Music
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside