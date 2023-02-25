import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models/Song'

const usePlay = (
  prevSongs: Song[], 
  section: string
) => {
  const { songs: actualSongs, category, onPlay } = useMusicPlayer()
  const isInActualCategory = category !== section
  const songs = isInActualCategory ? prevSongs : actualSongs

  const handlePlay = (song: Song) => {
    onPlay(
      song, 
      section, 
      isInActualCategory ? songs : undefined
    )
  }
  
  return {
    songs,
    handlePlay  
  }
}

export default usePlay