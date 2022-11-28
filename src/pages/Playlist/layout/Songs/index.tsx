import { SongCard } from '@/components/atoms/Card'
import { SongList } from '@/components/atoms/Section'
import { Song } from '@/models/Song'
import { usePlaylist } from '../context/SinglePlaylistProvider'

export const Songs = () => {
  const { songs } = usePlaylist()

  const handlePlay = (song: Song) => {

  }

  return (
    <SongList>
      {
        songs?.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            handlePlay={handlePlay}
          />
        ))
      }
    </SongList>
  )
}
