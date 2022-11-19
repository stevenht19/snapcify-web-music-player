import { Song, SongResponse } from '@/models/Song'
import { songAdapter } from '@/adapters/song'

const searchSongsByQuery = async (q?: string): Promise<Song[]> => {
  const res: SongResponse[] = await (await fetch(`${import.meta.env.VITE_API}/songs`)).json()
  const results = res.map(song => songAdapter(song))

  return results
}

export default searchSongsByQuery