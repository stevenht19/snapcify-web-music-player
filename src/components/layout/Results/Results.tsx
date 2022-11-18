import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'

const Results = ({ parsedQuery, items }: {
  parsedQuery: string
  items: Song[]
}) => {
  return (
    <Section title={`Results of ${parsedQuery}`}>
      {/*
        results?.map((song) => (
          <SongCard 
            song={song} 
            category={'RESULT'} 
          />
        )).slice(1)
      */}
    </Section>
  )
}

export default Results