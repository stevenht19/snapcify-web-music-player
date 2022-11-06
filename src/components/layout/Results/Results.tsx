import { Song } from '@/models'
import Result from '@/components/atoms/Card/Result'
import './style.css'

type Props = {
  items: Song[]
}

const Results = ({ items }: Props) => {
  return (
    <div className='results'>
      {
        items?.map((song) => (
          <Result 
            key={song.id}
            {...song}
          />
        ))
      }
    </div>
  )
}

export default Results