import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models/Song'
import { SongCard } from '@/components/atoms/Card'
import { SongList } from '@/components/atoms/Section'
import { usePlaylist } from '../hooks'

export const Songs = () => {
  const { songs, category, onPlay } = useMusicPlayer()
  const { savedSongs, playlistName } = usePlaylist()

  const handlePlay = (song: Song) => {
    onPlay(song, playlistName, savedSongs);
  }

  return (
    <SongList>
      {
        category === playlistName ?
          songs?.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
            />
          )) :
          savedSongs?.map((song) => (
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
