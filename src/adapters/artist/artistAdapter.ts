import { Artist, ArtistResponse } from '@/models/Artist'

const artistAdapter = (entrie: ArtistResponse): Artist => ({
  id: entrie.id,
  name: entrie.name,
  avatar: entrie.visuals.avatar[0].url,
})

export default artistAdapter