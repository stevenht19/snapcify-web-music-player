import { Song } from '@/models/Song';

export const songAlreadyExists = (savedSongs: Song[], songs: Song[]) => {
  const size = savedSongs.length

  for (let i = 0; i < size; i++) {
    for(let index in songs) {
      if (songs[index].id === savedSongs[i].id) {
        songs[index] = {...songs[index], id: '' }
      }
    }
  }
  return songs.filter(s => s.id.length > 0)
}