import { useMusicPlayer } from '@/hooks'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongCard } from '@/components/atoms/Song'

const Popular = () => {
  const { songs, isLoading } = useMusicPlayer()

  return (
    <section style={{
      paddingRight: '5rem'
    }}>
      <h2>Popular</h2>
      {
        isLoading ?
          [1, 2, 3, 4, 5, 6].map((n) => (
            <SongSkeleton key={n} />
          ))
        :
        songs.map((song) => (
          <SongCard
            key={song.id}
            {...song}
          />
        ))
      }
    </section>
  )
}

export default Popular