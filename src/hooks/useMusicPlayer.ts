import { useContext } from 'react'
import { MusicPlayerContext } from '@/context/PlayerProvider'

const usePlayerContext = () => { 
  return useContext(MusicPlayerContext) 
}
export default usePlayerContext