import userAvatar from '@/assets/user.jpg'
import { Link } from 'react-router-dom'
import { UserAvatar } from '@/components/atoms/Avatar'
import Navbar from './Navbar'
import './style.css'

const Aside = () => {
  return (
    <aside className='aside'>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: '1.2rem'
      }}>
        <h1 className='logo'>
          <Link to='/'>
            User
          </Link>
        </h1>
        <UserAvatar 
          src={userAvatar}
          alt='User Avatar'
        />
      </div>
      <Navbar />
    </aside>
  )
}

export default Aside