import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { db } from '@/config'
import { Routes } from '@/utils/routes'

interface PlaylistState {
  playlists: Playlist[]
  isLoading: boolean
  selectedPlaylist: Playlist | null
}

interface PlaylistsContext extends PlaylistState {
  addPlaylist(_p: Playlist, _a: Function): void
  onEdit(_p: Playlist, _a: Function): void
  onDelete(_id: Playlist['id'], _a: Function): void
  onSelect(_p: Playlist): void
}

export default function PlaylistProvider({ children }: {
  children: React.ReactNode
}) {
  const [playlists, setPlaylists] = useState<PlaylistState['playlists']>([])
  const [selectedPlaylist, setPlaylist] = useState<PlaylistState['selectedPlaylist']>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const navigateTo = useNavigate()

  useEffect(() => {
    db.getPlaylists()
      .then(setPlaylists)
      .finally(() => setLoading(false))
  }, [])

  const addPlaylist = (playlist: Playlist, action: Function) => {
    action()
    if (!playlist.description?.length) {
      delete playlist.description
    }

    setPlaylists(p => p.concat(playlist))
    db.addPlaylist(playlist)
    navigateTo(`${Routes.PLAYLIST}/${playlist.id}`)
  }

  const onEdit = (playlist: Playlist, action: Function) => {
    action()
    setPlaylists(p => p.map(p => p.id === playlist.id ? playlist : p))
    db.editPlaylist(playlist)
  }

  const onDelete = (id: Playlist['id'], action: Function) => {
    action()
    setPlaylists(playlists => playlists.filter(playlist => playlist.id !== id))
    db.deletePlaylist(id)
  }

  const onSelect = (playlist: Playlist) => {
    setPlaylist(playlist)
  }

  return (
    <PlaylistContext.Provider value={{
      playlists,
      isLoading,
      selectedPlaylist,
      addPlaylist,
      onEdit,
      onDelete,
      onSelect
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
export const PlaylistContext = createContext<PlaylistsContext>({
  playlists: [],
  isLoading: true,
  selectedPlaylist: null,
  addPlaylist: () => {},
  onEdit: () => {},
  onDelete: () => {},
  onSelect: () => {}
})
