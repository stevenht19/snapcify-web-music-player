import { useContext } from 'react'
import { PlaylistContext } from '@/context/PlaylistProvider'

const usePlaylists = () => {
  return useContext(PlaylistContext)
}

export default usePlaylists