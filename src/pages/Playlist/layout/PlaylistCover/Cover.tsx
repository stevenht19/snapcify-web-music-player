import { Playlist } from '@/models/Playlist'
import { Image } from './Image'
import './style.css'

const Cover = ({ name, description }: Playlist) => {
  return <>
    <div className='cover'>
      <Image />
      <div className='cover__content'>
        <span className='cover__span'>Playlist</span>
        <h2 className='cover__title'>{name}</h2>
        <p className='cover__description'>{description || 'by User'}</p>
      </div>
    </div>
  </>
}

export default Cover