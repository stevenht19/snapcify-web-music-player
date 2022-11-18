import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

export const getSongs = (
  state: MusicPlayerState, 
  payload?: Song[],
  category?: MusicPlayerState['category']
) => {
  if (category === 'FAVORITE') {
    return state.favorites
  }
  return payload || state.songs
}

export const getFavorite = (songs: Song[], id: Song['id']) => {
  const song = songs.find((song) => song.id === id)
  return song ? {...song, isFavorite: true} : null
}

export const evalPlayer = (state: MusicPlayerState, song: Song, category: MusicPlayerState['category']) => {
  return getId(song) === getId(state.selectedSong) && (category === state.category) ? !state.play : true
}

export const getLength = (songs: Song[]) => {
  return songs.length
}

export const getId = (song?: Song) => {
  return song?.id
}

export const parseSong = (song: Song, condition: boolean) => condition ? ({
  ...song,
  isPlaying: !song.isPlaying
}) : ({...song, isPlaying: false })

export const findIndex = (songs: Song[], id: Song['id']) => {
  return songs.findIndex(song => song.id === id)
}

export const mapByIndex = (songs: Song[], index: number) => {
  return songs.map((song, i) => parseSong(song, index === i))
}

export const map = (songs: Song[], id: Song['id'], local = false) => {
  return !local ? {
    songs: songs.map(song => parseSong(song, song.id === id))
  } : {
    favorites: songs.map(song => parseSong(song, song.id === id))
  }
}

export const decrease = (index: number, maxLength: number) => {
  return index === 0 ? maxLength - 1 : index - 1
}

export const increase = (index: number, maxLength: number) => {
  return index === maxLength - 1 ? 0 : index + 1
}
