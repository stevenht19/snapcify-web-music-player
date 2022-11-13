import { Song } from './models'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  isDisabled: boolean
  repeated: boolean
  categorie: 'CAROUSEL' | 'POPULAR' | null
  selectedSong: Song | null
  selectedIndex: number | null
  songs: Song[]
  topSongs: Song[]
}