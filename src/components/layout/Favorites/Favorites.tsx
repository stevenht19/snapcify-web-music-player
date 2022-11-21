import { usePlay } from '@/hooks'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'
import { Message } from '@/components/atoms/Message'
import { Song } from '@/models/Song'

const Favorites = ({ favorites }: {
  favorites: Song[]
}) => {
  const { songs, handlePlay } = usePlay(favorites, 'FAVORITE')

  return (
    <Section title='Favorites'>
      {
        favorites.length ?
          songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          )) 
        : 
        <Message>
          You do not have any favorite song yet.
        </Message>
      }
    </Section>
  )
}


export default Favorites