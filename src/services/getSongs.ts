import { songAdapter } from '@/adapters/song'
import { Song } from '@/models/Song'
import { getFetch } from '@/utils'

const getSongs = async (args: string): Promise<Song[]> => {
  const map = getFetch(args)
    .then(res => {
      return res.map(songAdapter)
    })
    .catch(res => console.log(res))
  return map
}

export default getSongs