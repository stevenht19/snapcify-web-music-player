import { Song } from '@/models'
import { SongResponse } from '@/models/responses'

const songAdapter = (entrie: SongResponse): Song => {
  return {
    id: entrie.key,
    title: entrie.title,
    artist: entrie.subtitle,
    image: entrie.images.coverart,
    url: entrie.hub.actions[1].uri!
  }
}

export default songAdapter