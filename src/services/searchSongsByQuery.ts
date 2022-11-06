import { Song } from '@/models'
import { songAdapter } from '@/adapters'

const searchSongsByQuery = async (q?: string): Promise<Song[]> => {
  const res = await (await fetch(`${import.meta.env.VITE_API}/songs/${q || 1}`)).json()
  const results = [res].map(song => songAdapter(song))

  return results
}

export default searchSongsByQuery