import './style.css'

const Song = () => {
  return (
    <div className='song__content'>
      <div>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/5/5e/The_Car_by_Arctic_Monkeys_album.jpg'
          alt='song name'
          className='song__image'
        />
      </div>
      <div>
        <h2 className='song__title'>The Car</h2>
        <span className='song__artist'>Arctic Monkeys</span>
      </div>
    </div>
  )
}

export default Song