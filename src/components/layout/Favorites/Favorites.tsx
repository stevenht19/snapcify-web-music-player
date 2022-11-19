import { Song } from '@/models/Song'
import { useMusicPlayer } from '@/hooks'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'

const CATEGORY = 'FAVORITE'

const resolveFavorites = (
  isInActualCategory: boolean, 
  favorites: Song[], 
  songs: Song[]
) => {
  return isInActualCategory ? favorites : songs
}

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
        favorites.length ?
        resolveFavorites(isInActualCategory, favorites, songs)
          .map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          ))
        : 'You dont have any favorite song yet.'
      }
    </Section>
  )
}


export default Favorites