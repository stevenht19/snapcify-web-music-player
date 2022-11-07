import { Song } from '@/models'
import Title from '../components/Title'
import Artist from '../components/Artist'
import './style.css'

const Result = (props: Song) => {
  return (
    <div className='result'>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='result__content'>
        <Title title={props.title} />
        <Artist artist={props.artist} />
      </div>
    </div>
  )
}

export default Result