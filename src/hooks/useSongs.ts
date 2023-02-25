import { useFetch, usePlay } from '@/hooks'
import { getSongs } from '@/services'

const fetcher = (args: string) => getSongs(args!)

const useSongs = (
  songCategory: string, 
  path: string
) => {
  const { data, isLoading } = useFetch(path, fetcher)
  const { songs, handlePlay } = usePlay(data || [], songCategory)

  return {
    songs,
    isLoading,
    handlePlay,
  }
}

export default useSongs