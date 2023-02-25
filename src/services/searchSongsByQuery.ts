import { Song, DirtyData } from '@/models/Song'
import { clearAdapter, songAdapter } from '@/adapters/song'
import { getFetch } from '@/utils'

type Response = {
  tracks: {
    hits: DirtyData[]
  }
}

const PATH = '/search/multi?search_type=SONGS_ARTISTS'

const clearResult = (song: DirtyData) => {
  return songAdapter(clearAdapter(song))
}

const searchSongsByQuery = async (q: string): Promise<Song[]> => {
  try {
    
    const res: Response = await getFetch(`${PATH}&query=${encodeURI(q)}`)
    return res
      .tracks
      .hits
      .map(clearResult)
  } catch (_) {
    return []
  }
}

export default searchSongsByQuery