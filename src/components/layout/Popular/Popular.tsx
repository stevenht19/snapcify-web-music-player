import { useSongs } from '@/hooks'
import { Section } from '@/components/atoms/Section'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongCard } from '@/components/atoms/Card'
import { getNumericArray } from '@/utils'

const API = import.meta.env.VITE_API + '/top'

export default function Popular() {
  const { 
    songs, 
    isLoading,
    handlePlay,
    onFavorite
  } =  useSongs('POPULAR', API)

  return (
    <Section title='Popular'>
      {
        isLoading ?
          getNumericArray().map((n) => (
            <SongSkeleton key={n} />
          ))
          :
          songs?.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handleFavorite={onFavorite}
              handlePlay={handlePlay}
            />
          ))
      }
    </Section>
  )
}
