import { songAdapter } from '@/adapters/song'
import { Song } from '@/models/Song'
import { getFetch } from '@/utils'

const getSongs = async (args: string): Promise<Song[]> => {
  return getFetch(args)
    .then(res => res.map(songAdapter))
}

export default getSongs