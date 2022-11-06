import { useMusicPlayer } from '@/hooks'
import { SongSkeleton } from '@/components/atoms/Skeleton'
import { SongCard } from '@/components/atoms/Card'
import './style.css'

const Popular = () => {
  const { songs, isLoading } = useMusicPlayer()

  return (
    <section className='popular'>
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
            song={song}
          />
        ))
      }
    </section>
  )
}

export default Popular