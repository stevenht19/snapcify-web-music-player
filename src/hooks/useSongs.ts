import useSWR from 'swr'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import { MusicPlayerState } from '@/types'
import { getSongs } from '@/services'

const fetcher = (args: string) => getSongs(args)

const useSongs = (
  songCategory: MusicPlayerState['category'], 
  url: string
) => {
  
  const { data, error } = useSWR<Song[]>(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false
  })

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
    isLoading: !error && !data,
    handlePlay,
  }
}

export default useSongs