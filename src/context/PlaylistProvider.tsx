import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { db } from '@/config'

interface PlaylistState {
  playlists: Playlist[]
}

interface PlaylistContext extends PlaylistState {
  addPlaylist: (_p: Playlist, _a: Function) => void
  onEdit: (_p: Playlist, _a: Function) => void
  onDelete: (_id: Playlist['id']) => void
}

export default function PlaylistProvider({ children }: {
  children: React.ReactNode
}) {
  const navigateTo = useNavigate()
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  useEffect(() => {
    db.getPlaylists()
      .then(setPlaylists)
  }, [])

  const addPlaylist = (playlist: Playlist, action: Function) => {
    action()

    if (!playlist.description?.length) {
      delete playlist.description
    }

    setPlaylists(p => p.concat(playlist))
    db.addPlaylist(playlist)
    navigateTo(`/playlist/${playlist.id}`)
  }

  const onEdit = (playlist: Playlist, action: Function) => {
    action()
    setPlaylists(p => p.map(p => p.id === playlist.id ? playlist : p))
    db.editPlaylist(playlist)
  }

  const onDelete = (id: Playlist['id']) => {
    setPlaylists(playlists => playlists.filter(playlist => playlist.id !== id))
    db.deletePlaylist(id)
  }

  return (
    <PlaylistContext.Provider value={{
      playlists,
      addPlaylist,
      onEdit,
      onDelete
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
export const PlaylistContext = createContext<PlaylistContext>({
  playlists: [],
  addPlaylist: () => {},
  onEdit: () => {},
  onDelete: () => {}
})
