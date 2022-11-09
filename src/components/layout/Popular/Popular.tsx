import { useMusicPlayer } from '@/hooks'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongList } from '@/components/atoms/List'
import { SongCard } from '@/components/atoms/Card'

const Popular = () => {
  const { songs, isLoading } = useMusicPlayer()

  return (
    <section>
      <h2>Popular</h2>
      <SongList>
        {
          isLoading ?
            [1, 2, 3, 4, 5, 6].map((n) => (
              <SongSkeleton key={n} />
            ))
            :
            songs.map((song) => (
              <SongCard
                key={song.id}
                type={'POPULAR'}
                song={song}
              />
            ))
        }
      </SongList>
    </section>
  )
}

export default Popular