import { PlaylistContext } from '@/context/PlaylistProvider'
import { useContext } from 'react'

const usePlaylists = () => {
  return useContext(PlaylistContext)
}

export default usePlaylists