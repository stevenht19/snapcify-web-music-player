import './style.css'

const ListOfSongs = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='song-list'>
      {children}
    </div>
  )
}

export default ListOfSongs