import { SongCard } from '@/components/atoms/Song'
import { useMusicPlayer } from '@/hooks'

const Popular = () => {
  const { songs } = useMusicPlayer()

  return (
    <section>
      <h2>Popular</h2>
      {
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