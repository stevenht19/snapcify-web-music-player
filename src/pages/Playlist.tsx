import { usePlaylists } from '@/hooks'
import { Paginator } from '@/components/layout/Paginator'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { useParams } from 'react-router-dom'

export default function Playlist() {
  const { id } = useParams()
  const { playlists } = usePlaylists()

  const playlist = playlists.find(playlist => playlist.id === Number(id))
  
  return <>
    <Paginator
      title={playlist?.name!}
      icon={<PlaylistIcon />}
    />
  </>
}
