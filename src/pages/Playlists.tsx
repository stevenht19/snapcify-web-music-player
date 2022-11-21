import { Paginator } from '@/components/layout/Paginator'
import { PlaylistIcon } from '@/components/atoms/Icon'

export default function Playlists() {
  return <>
    <Paginator
      title='Playlists'
      icon={<PlaylistIcon />}
    />
  </>
}
