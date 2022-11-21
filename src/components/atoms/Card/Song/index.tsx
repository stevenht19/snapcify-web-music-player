import { Avatar } from '@/components/atoms/Avatar'
import { Song } from '@/models/Song'
import './style.css'

type Props = {
  image: Song['image'],
  title: Song['title'],
  artist: Song['artist'],
  rotate?: boolean
}

export const SongTrack = ({
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
        {...(rotate && { className: 'song__image--active' })}
      />
      <div>
        <h2 className='song__title'>{title}</h2>
        <span className='song__artist'>{artist}</span>
      </div>
    </div>
  )
}