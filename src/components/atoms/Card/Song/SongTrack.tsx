import { Avatar } from '@/components/atoms/Avatar'
import { Song } from '@/models/Song'
import './style.css'

type Props = Song & {
  rotate?: boolean
}

const SongTrack = ({
  title,
  image,
  artist,
  rotate
}: Props) => {
  return (
    <div className='song__content'>
      <Avatar
        src={image}
        alt={title}
        type='song'
        {...(rotate && { className: 'song__image--active' })}
      />
      <div>
        <h2 className='song__title'>{title}</h2>
        <span className='song__artist'>{artist}</span>
      </div>
    </div>
  )
}
export default SongTrack