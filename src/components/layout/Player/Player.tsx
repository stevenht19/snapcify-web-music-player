import { Song } from '@/components/atoms/Song'
import Buttons from './Buttons'
import Volume from './Volume'
import Bar from './Bar'
import './style.css'

const Player = () => {
  return (
    <div className='player'>
      <Song />
      <div className='player__controls'>
        <Buttons />
        <Bar />
      </div>
      <Volume />
    </div>
  )
}

export default Player