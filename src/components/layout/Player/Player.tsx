import Controls from './Controls'
import Track from './Track'
import './style.css'

const Player = () => {
  return (
    <div className='player'>
      <Track />
      <Controls />
    </div>
  )
}

export default Player