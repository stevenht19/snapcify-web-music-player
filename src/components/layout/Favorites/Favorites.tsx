import { useFavorites } from './hooks/useFavorites'
import { SongCard } from '@/components/atoms/Card'
import { SongList } from '@/components/atoms/List'

const Favorites = () => {
  const { favorites, handleFavoritePlay, onDeleteFavorite } = useFavorites()

  return (
    <SongList>
      <h2>Favorites</h2>
      {
        favorites?.map((song) => (
          <SongCard
            key={song.id}
            type='POPULAR'
            song={song}
            handleFavoritePlay={handleFavoritePlay}
            onDeleteFavorite={onDeleteFavorite}
          />
        )) || <p>You don't like any song yet.</p>
      }
    </SongList>
  )
}


export default Favorites