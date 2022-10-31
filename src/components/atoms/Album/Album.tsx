import './style.css'
//PICK PROPS FROM MODEL
const Album = () => {
  return (
    <div className='album-card'>
      <div>
        <img
          className='album__image'
          src='https://upload.wikimedia.org/wikipedia/en/5/5f/6ix9ine_-_FEFE.png'
          alt='Album name'
        />
      </div>
      <h2 className='album__title'>FEFE</h2>
      <span className='album__artist'>6ix9nine</span>
    </div>
  )
}

export default Album