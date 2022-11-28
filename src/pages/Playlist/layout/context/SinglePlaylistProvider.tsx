import { Song } from '@/models/Song'
import { createContext, useContext, useState } from 'react'

interface SinglePlaylistContext {
  songs: Song[]
  onAdd: (_s: Song) => void
}

const SinglePlaylistContext = createContext<SinglePlaylistContext>({
  songs: [],
  onAdd: (_s) => {}
})

export const SinglePlaylistProvider = ({ children }: {
  children: React.ReactNode
}) => {

  const [songs, setSongs] = useState<Song[]>([])

  const onAdd = (song: Song) => {
    if (songs.findIndex(s => s.id === song.id) >= 0) return
    setSongs(songs => songs.concat(song))
  }

  return (
    <SinglePlaylistContext.Provider value={{
      songs,
      onAdd
    }}>
      {children}
    </SinglePlaylistContext.Provider>
  )
}

export const usePlaylist = () => useContext(SinglePlaylistContext)