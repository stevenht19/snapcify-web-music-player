import { Song } from '@/components/atoms/Song'
import Buttons from './Buttons'
import Volume from './Volume'
import './style.css'

const Player = () => {
  return (
    <div className='player'>
      <Song />
      <Buttons />
      <Volume />
    </div>
  )
}

export default Player