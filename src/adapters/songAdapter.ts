import { Song, SongResponse } from '@/models'

const songAdapter = (entrie: SongResponse): Song => {
  return {
    id: entrie.key,
    title: entrie.title,
    artist: entrie.subtitle,
    image: entrie.images.coverart,
    url: entrie.hub.actions[1].uri!,
    isPlaying: false,
    isFavorite: false
  }
}

export default songAdapter