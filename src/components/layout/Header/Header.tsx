import Button from './Button'
import './style.css'

const Header = () => {
  return (
    <header className='header'>
      <form>
        <div className='searcher'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--white)"
          >
            <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
          <input
            type='text'
            className='search__input'
            placeholder='Search a song here'
          />
        </div>
      </form>
      <Button />
    </header>
  )
}

export default Header