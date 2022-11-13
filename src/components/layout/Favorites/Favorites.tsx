import { useFavorites } from './hooks/useFavorites'
import { SongCard } from '@/components/atoms/Card'
import Section from '@/components/atoms/Section'

const Favorites = () => {
  const { 
    favorites,
    isLoading,
    handleFavoritePlay, 
    onDeleteFavorite 
  } = useFavorites()

  return (
    <Section title='Favorites'>
      {
        isLoading ?
        '...Loading'
        :
        favorites?.length ?
        favorites?.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            category='POPULAR'
            handleFavoritePlay={handleFavoritePlay}
            onDeleteFavorite={onDeleteFavorite}
          />
        )) : <p>You don't like any song yet.</p>
      }
    </Section>
  )
}


export default Favorites