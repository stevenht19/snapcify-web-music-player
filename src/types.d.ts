import { Song } from './models'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  selectedSong: Song
  songs: Song[]
}