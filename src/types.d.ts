import { Song } from './models'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  isDisabled: boolean
  fromCarousel: boolean
  selectedSong: Song | null
  songs: Song[]
  topSongs: Song[]
}