import { getFetch } from '@/utils'
import { artistAdapter } from '@/adapters/artist'
import { Artist } from '@/models/Artist'

const getArtists = async (path: string): Promise<Artist[]> => {
  return getFetch(import.meta.env.VITE_API + path)
    .then(res => res.map(artistAdapter))
}

export default getArtists