import { Artist } from '@/models/Artist'
import Title from '../components/Title'
import './style.css'

const ArtistCard = ({ name, avatar }: Artist) => {
  return (
    <div className='artist'>
      <img
        className='artist__image'
        src={avatar}
      />
      <Title title={name} />
    </div>
  )
}

export default ArtistCard