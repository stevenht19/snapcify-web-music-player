import { useMusicPlayer } from '@/hooks'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongCard } from '@/components/atoms/Card'
import Section from '@/components/atoms/Section'

const Popular = () => {
  const { songs, isLoading } = useMusicPlayer()

  return (
    <Section title='Popular'>
      {
        isLoading ?
          [1, 2, 3, 4, 5, 6].map((n) => (
            <SongSkeleton key={n} />
          ))
          :
          songs.map((song) => (
            <SongCard
              key={song.id}
              category={'POPULAR'}
              song={song}
            />
          ))
      }
    </Section>
  )
}

export default Popular