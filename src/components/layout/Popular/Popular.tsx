import { useSongs } from '@/hooks'
import { Section } from '@/components/atoms/Section'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongCard } from '@/components/atoms/Card'
import { getNumericArray } from '@/utils'

export default function Popular() {
  const { 
    songs, 
    isLoading,
    handlePlay
  } =  useSongs('POPULAR', '/top')

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
              handlePlay={handlePlay}
            />
          ))
      }
    </Section>
  )
}
