import { Song } from '@/models'
import './style.css'

const Result = (props: Song) => {
  return (
    <div className='result'>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
      <span>{props.artist}</span>
    </div>
  )
}

export default Result