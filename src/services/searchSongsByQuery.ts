import { Song, SongResponse } from '@/models'
import { songAdapter } from '@/adapters'

const searchSongsByQuery = async (q?: string): Promise<Song[]> => {
  const res: SongResponse[] = await (await fetch(`${import.meta.env.VITE_API}/songs`)).json()
  const results = res.map(song => songAdapter(song))

  return results
}

export default searchSongsByQuery