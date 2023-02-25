import { songAdapter } from '@/adapters/song'
import { Song, SongResponse } from '@/models/Song'
import { getFetch } from '@/utils'

const getSongs = async (args: string): Promise<Song[]> => {
  return getFetch(args)
    .then((res: SongResponse[]) => res.map(songAdapter))
}

export default getSongs