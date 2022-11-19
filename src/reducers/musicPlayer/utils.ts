import { MusicPlayerState } from '@/types'
import { Song } from '@/models/Song'

export const getSongs = (
  state: MusicPlayerState, 
  payload?: Song[]
) => {
  return payload || state.songs
}

export const parseFavorite = (song: Song, to?: boolean) => {
  return {
    ...song,
    isFavorite: to !== undefined ? to : true
  }
}

export const getFavorite = (songs: Song[], selectedSong: Song) => {
  const song = songs.find((song) => song.id === selectedSong.id)
  return song ? parseFavorite(song) : selectedSong
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

export const map = (songs: Song[], id: Song['id']) => {
  return songs.map(song => parseSong(song, song.id === id))
}

export const decrease = (index: number, maxLength: number) => {
  return index === 0 ? maxLength - 1 : index - 1
}

export const increase = (index: number, maxLength: number) => {
  return index === maxLength - 1 ? 0 : index + 1
}

export const filter = (songs: Song[], id: Song['id']) => {
  return songs.filter(song => song.id !== id)
} 