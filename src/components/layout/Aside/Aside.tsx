import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './style.css'

const Aside = () => {
  return (
    <aside className='aside'>
      <h1 className='logo'>
        <Link to='/'>
          Snapcify
        </Link>
      </h1>
      <Navbar />
    </aside>
  )
}

export default Aside