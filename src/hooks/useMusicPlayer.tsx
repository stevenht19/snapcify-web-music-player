import { useContext } from 'react'
import { MusicPlayerContext } from '@/context/PlayerContext'

const usePlayerContext = () => { 
  return useContext(MusicPlayerContext) 
}
export default usePlayerContext