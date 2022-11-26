import { usePlay } from '@/hooks'
import { Song } from '@/models/Song'
import { MusicPlayerState } from '@/types'
import { Section } from '@/components/atoms/Section'
import { SongCard } from '@/components/atoms/Card'
import { Message } from '@/components/atoms/Message'

type Props = {
  items: Song[]
  category: MusicPlayerState['category']
  title: string
  message?: string
}

export const SongList = ({ items, category, title, message }: Props) => {
  const { songs, handlePlay } = usePlay(items, category)

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