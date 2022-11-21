import { usePlay } from '@/hooks'
import { Song } from '@/models/Song'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'

const Results = ({ parsedQuery, items }: {
  parsedQuery: string
  items: Song[]
}) => {
  const { songs, handlePlay } = usePlay(items, 'RESULTS')

  return (
    <Section title={`Results of ${parsedQuery}`}>
      {
        songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            handlePlay={handlePlay} 
          />
        ))
      }
    </Section>
  )
}

export default Results