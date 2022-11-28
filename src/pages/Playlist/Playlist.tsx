import { Navigate, useParams } from 'react-router-dom'
import { usePlaylists } from '@/hooks'
import { SinglePlaylistProvider } from './layout/context/SinglePlaylistProvider'
import { Cover } from './layout/PlaylistCover'
import { AddSong } from './layout/Search/AddSong'
import { Songs } from './layout/Songs'

export default function Playlist() {
  const { id } = useParams()
  const { playlists } = usePlaylists()

  const playlist = playlists.find(playlist => playlist.id === Number(id))

  if (!playlist) return <Navigate to='/' />

  return (
    <SinglePlaylistProvider>
      <Cover {...playlist} />
      <AddSong />
      <Songs />
    </SinglePlaylistProvider>
  )
}
