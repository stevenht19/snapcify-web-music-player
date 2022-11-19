//import { useFetch } from '@/hooks'
import Artist from '@/components/atoms/Card/Artist/Artist'
import { useFetch } from '@/hooks'
import { getArtists } from '@/services'

export default function Artists() {
  const { data, isLoading } = useFetch('/artists', getArtists)
 
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {
        data?.map((artist) => (
          <Artist
            key={artist.id}
            {...artist}
          />
        ))
      }
    </div>
  )
}
