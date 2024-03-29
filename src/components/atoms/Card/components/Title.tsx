import { Song } from '@/models/Song'
import './style.css'

const Title = ({ title }: { 
  title: Song['title'] 
}) => {
  return (
    <h2 className='card__title'>{title}</h2>
  )
}

export default Title