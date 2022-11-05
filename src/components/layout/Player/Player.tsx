import Controls from './Controls'
import Track from './Track'
import './style.css'

const Player = () => {
  return (
    <div className='player'>
      <div className='player__container'>
        <Track />
        <Controls />
      </div>
    </div>
  )
}

export default Player