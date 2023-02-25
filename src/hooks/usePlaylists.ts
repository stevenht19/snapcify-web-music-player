import { useContext } from 'react'
import { PlaylistContext } from '@/context/PlaylistsProvider'

const usePlaylists = () => {
  return useContext(PlaylistContext)
}

export default usePlaylists