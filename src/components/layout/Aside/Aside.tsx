import Navbar from './Navbar'
import Profile from './Profile'
import './style.css'

const Aside = () => {
  return (
    <aside className='aside'>
      <Profile />
      <Navbar />
    </aside>
  )
}

export default Aside