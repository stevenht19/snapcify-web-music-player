import { Song } from '@/models'
import './style.css'

const Artist = ({ artist }: { 
  artist: Song['artist'] 
}) => {
  return (
    <span className='card__artist'>{artist}</span>
  )
}

export default Artist