import { Song, SongResponse } from '@/models/Song'
import skeleton from '@/assets/skeleton.png'

const songAdapter = (entrie: SongResponse): Song => {
  return {
    id: entrie.key,
    title: entrie.title,
    artist: entrie.subtitle,
    image: entrie?.images?.coverart || entrie.images?.coverarthq || skeleton,
    url: entrie?.hub?.actions ? (entrie.hub?.actions[1].uri) : undefined,
    isPlaying: false,
    isFavorite: false,
    isSelected: false
  }
}
export default songAdapter