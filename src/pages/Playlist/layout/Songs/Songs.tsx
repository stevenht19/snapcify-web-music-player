import { IoRemoveCircleOutline } from 'react-icons/io5'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models/Song'
import { SongCard } from '@/components/atoms/Card'
import { SongList } from '@/components/atoms/Section'
import { usePlaylist } from '../hooks'

const Songs = () => {
  const { songs, category, onPlay, onDeleteSongFromQueue } = useMusicPlayer()
  const { savedSongs, playlistName, deleteSong } = usePlaylist()

  const handlePlay = (song: Song) => {
    onPlay(song, playlistName, savedSongs);
  }

  const onDelete = (song: Song) => {
    onDeleteSongFromQueue(song)
    deleteSong(song.id)
  }

  return <>
    <SongList>
      {
        category === playlistName ?
          songs?.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
              rightIconAction={onDelete}
              rightIcon={<IoRemoveCircleOutline />}
            />
          )) :
          savedSongs?.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
              rightIconAction={onDelete}
              rightIcon={<IoRemoveCircleOutline />}
            />
          ))
      }
    </SongList>
  </>
}
export default Songs
