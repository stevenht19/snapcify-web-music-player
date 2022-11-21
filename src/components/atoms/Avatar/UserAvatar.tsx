import Status from './Status'
import './style.css'

const UserAvatar = ({
  src,
  alt
}: {
  src: string,
  alt: string
}) => {
  return (
    <div className='user'>
      <img
        className='avatar user-avatar'
        src={src}
        alt={alt}
      />
      <Status />
    </div>
  )
}

export default UserAvatar