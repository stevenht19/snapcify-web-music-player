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
      <div>
        <img
          src={image}
          alt='song name'
          className={'song__image' + (rotate ? ' song__image--active' : '')}
        />
      </div>
      <div>
        <h2 className='song__title'>{title}</h2>
        <span className='song__artist'>{artist}</span>
      </div>
    </div>
  )
}