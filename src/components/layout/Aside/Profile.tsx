import { Link } from 'react-router-dom'
import { Avatar } from '@/components/atoms/Avatar'
import userAvatar from '@/assets/user.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <h1 className='profile__username'>
        <Link to='/'>
          User
        </Link>
      </h1>
      <Avatar
        src={userAvatar}
        type='user'
        alt='User Avatar'
      />
    </div>
  )
}

export default Profile