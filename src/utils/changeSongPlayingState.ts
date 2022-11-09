import { Song } from '@/models'

const changeSongState = (
  song: Song, 
  id: Song['id'],
): Song => {
  return (song.id === id) ? {
    ...song, 
    isPlaying: !song.isPlaying
  } : song
}

export default changeSongState