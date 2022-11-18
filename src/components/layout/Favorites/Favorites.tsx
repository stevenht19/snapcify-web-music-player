import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'

const Favorites = () => {
  const { songs, favorites, category, onPlay } = useMusicPlayer()

  const handlePlay = (song: Song) => {
    onPlay(song, 'FAVORITE', category !== 'FAVORITE' ? favorites : undefined)
  }

  return (
    <Section title='Favorites'>
      {
        !songs.length ?
          favorites.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          )) :
          category === 'FAVORITE' ? (
            songs.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                handlePlay={handlePlay}
              />
            ))
          ) : (
            favorites.map((song) => (
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