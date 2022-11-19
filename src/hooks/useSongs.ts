import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models/Song'
import { MusicPlayerState } from '@/types'
import { getSongs } from '@/services'
import useFetch from './useFetch'

const fetcher = (args?: string): Promise<Song[]> => getSongs(args!)

const useSongs = (
  songCategory: MusicPlayerState['category'], 
  url: string
) => {
  
  const { data, isLoading } = useFetch(url, fetcher)

  const { songs, category, onPlay } = useMusicPlayer()

  const isInActualCategory = category !== songCategory 
  const savedSongs = isInActualCategory ? data : songs
  
  const handlePlay = (song: Song) => {
    onPlay(
      song, 
      songCategory, 
      isInActualCategory ? savedSongs! : undefined
    )
  }

  return {
    songs: savedSongs,
    isLoading,
    handlePlay,
  }
}

export default useSongs