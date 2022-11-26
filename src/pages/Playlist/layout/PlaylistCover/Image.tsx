export const Image = () => {
  return (
    <label
      htmlFor='playlist-image' 
      className='cover__label'
    >
      <input
        id='playlist-image'
        type='file'
        className='cover__image'
      />
    </label>
  )
}