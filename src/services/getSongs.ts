import { songAdapter } from '@/adapters/song'
import { Song } from '@/models/Song'

const getSongs = async (args: string): Promise<Song[]> => {
  return fetch(args).then(res => res.json()).then(res => res.map(songAdapter))
}

export default getSongs