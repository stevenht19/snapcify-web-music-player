import { DirtyData } from '@/models/Song'

const clearAdapter = (song: DirtyData) => {
  return song.track
}

export default clearAdapter