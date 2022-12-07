import { useFetch, usePlay } from '@/hooks'
import { Song } from '@/models/Song'
import { getSongs } from '@/services'

const API = import.meta.env.VITE_API
const fetcher = (args: string): Promise<Song[]> => getSongs(args!)

const useSongs = (
  songCategory: string, 
  path: string
) => {
  const { data, isLoading } = useFetch(`${API}${path}`, fetcher)
  const { songs, handlePlay } = usePlay(data || [], songCategory)

  return {
    songs,
    isLoading,
    handlePlay,
  }
}

export default useSongs