import { useContext } from 'react'
import { PlaylistContext } from '../context/PlaylistProvider'

const usePlaylist = () => {
  return useContext(PlaylistContext)
}

export default usePlaylist