import { Song } from './models'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  isDisabled: boolean
  categorie: 'CAROUSEL' | 'POPULAR' | null
  selectedSong: Song | null
  songs: Song[]
  topSongs: Song[]
}