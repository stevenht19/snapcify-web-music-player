import { usePlay } from '@/hooks'
import { Song } from '@/models/Song'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'
import { Message } from '@/components/atoms/Message'

type Props = {
  items: Song[]
  title: string
  message?: string
  category?: string
}

const SongList = ({ 
  items, 
  title, 
  message, 
  category 
}: Props) => {
  const { songs, handlePlay } = usePlay(items, category ?? title)

  return (
    <Section title={title}>
      {
        items.length ?
          songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          )) :
        <Message>
          {message || `There's no results.`}
        </Message>
      }
    </Section>
  )
}
export default SongList