import { useEffect } from 'react'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models'
import { SongCard } from '@/components/atoms/Card'
import Section from '@/components/atoms/Section'

const Results = ({ parsedQuery, items }: {
  parsedQuery: string
  items: Song[]
}) => {
  const { results, onSetResult } = useMusicPlayer()

  useEffect(() => {
    onSetResult(items)
  }, [])

  return (
    <Section title={`Results of ${parsedQuery}`}>
      {
        results?.map((song) => (
          <SongCard 
            song={song} 
            category={'RESULT'} 
          />
        )).slice(1)
      }
    </Section>
  )
}

export default Results