const SongList = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='song-list'>
      {children}
    </div>
  )
}

export default SongList