import { usePlaylists } from '@/hooks'
import { Navigate, useParams } from 'react-router-dom'
import { PlaylistProvider } from './layout/context'
import { Cover } from './layout/PlaylistCover'
import { AddSong } from './layout/Search/AddSong'
import { Songs } from './layout/Songs'

export default function Playlist() {
  const { id } = useParams()
  const { playlists, isLoading } = usePlaylists()

  const selectedId = Number(id)

  if (isLoading) return null

  const playlist = playlists.find(p => p.id === selectedId)

  if (!playlists.length && !isLoading) {
    return <Navigate to='/' />
  }

  if (!playlist) return <Navigate to='/' />

  return (
    <PlaylistProvider 
      playlistId={selectedId} 
      playlistName={playlist.name}
    >
      <Cover {...playlist} />
      <AddSong />
      <Songs />
    </PlaylistProvider>
  )
}
