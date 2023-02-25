import { CgRemove } from 'react-icons/cg'
import { useMusicPlayer } from '@/hooks'
import { Song } from '@/models/Song'
import { SongCard } from '@/components/atoms/Card'
import { SongList } from '@/components/atoms/Section'
import { usePlaylist } from '../hooks'

const Songs = () => {
  const { 
    songs, 
    category, 
    onPlay, 
    deleteFromQueue
  } = useMusicPlayer()
  
  const { 
    savedSongs, 
    playlistName, 
    deleteSong 
  } = usePlaylist()

  const handlePlay = (song: Song) => {
    onPlay(song, playlistName, savedSongs);
  }

  const onDelete = (song: Song) => {
    deleteFromQueue(song)
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
              rightIcon={<CgRemove color='var(--primary)' />}
            />
          )) :
          savedSongs?.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              handlePlay={handlePlay}
              rightIconAction={onDelete}
              rightIcon={<CgRemove color='var(--primary)' />}
            />
          ))
      }
    </SongList>
  </>
}
export default Songs
