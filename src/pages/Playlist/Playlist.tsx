import { Navigate, useParams } from 'react-router-dom'
import { usePlaylists } from '@/hooks'
import { Cover } from './layout/PlaylistCover'
import { AddSong } from './layout/AddSong'

export default function Playlist() {
  const { id } = useParams()
  const { playlists } = usePlaylists()

  const playlist = playlists.find(playlist => playlist.id === Number(id))

  if (!playlist) return <Navigate to='/' />

  return <>
    <Cover {...playlist} />
    <AddSong />
  </>
}
