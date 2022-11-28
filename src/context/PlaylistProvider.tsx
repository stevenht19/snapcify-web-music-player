import { useState, createContext, useEffect } from 'react'
import { Playlist } from '@/models/Playlist'
import { db } from '@/config'

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

  useEffect(() => {
    db.getPlaylists()
      .then(setPlaylists)
  }, [])

  const addPlaylist = (playlist: Playlist) => {
    setPlaylists(p => p.concat(playlist))
    db.addPlaylist(playlist)
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
