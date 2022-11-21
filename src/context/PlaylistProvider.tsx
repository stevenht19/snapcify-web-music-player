import { useState, createContext } from 'react'
import { Playlist } from '@/models/Playlist'

interface PlaylistState {
  playlists: Playlist[]
}

interface Context extends PlaylistState {
  addPlaylist: (_p: Playlist) => void
}

const initialState: PlaylistState = {
  playlists: []
}

export const PlaylistContext = createContext<Context>({
  ...initialState,
  addPlaylist: () => {}
})

export default function PlaylistProvider({ children }: {
  children: React.ReactNode
}) {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  const addPlaylist = (playlist: Playlist) => {
    setPlaylists(p => p.concat(playlist))
  }

  return (
    <PlaylistContext.Provider value={{
      ...initialState,
      addPlaylist,
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
