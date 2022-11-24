import { useState, createContext } from 'react'
import { Playlist } from '@/models/Playlist'

interface PlaylistState {
  playlists: Playlist[]
}

interface PlaylistContext extends PlaylistState {
  addPlaylist: (_p: Playlist) => void
}

export default function PlaylistProvider({ children }: {
  children: React.ReactNode
}) {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  const addPlaylist = (playlist: Playlist) => {
    setPlaylists(p => p.concat({...playlist, id: Date.now() }))
  }

  return (
    <PlaylistContext.Provider value={{
      playlists,
      addPlaylist,
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
export const PlaylistContext = createContext<PlaylistContext>({
  playlists: [],
  addPlaylist: () => {}
})
