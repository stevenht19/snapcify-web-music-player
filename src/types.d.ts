import { Song } from './models'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  selectedSong: Song | null
  songs: Song[]
  topSongs: Song[]
}