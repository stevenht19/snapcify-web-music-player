import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'

const CATEGORY = 'FAVORITE'

const Favorites = () => {
  const { songs, favorites, category: categoryState, onPlay } = useMusicPlayer()

  const isInActualCategory = categoryState !== CATEGORY

  const handlePlay = (song: Song) => {
    onPlay(
      song,
      CATEGORY,
      isInActualCategory ? favorites : undefined
    )
  }

  return (
    <Section title='Favorites'>
      {
        isInActualCategory ? (
          favorites.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          ))
        ) : (
          songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          ))
        )
      }
    </Section>
  )
}


export default Favorites