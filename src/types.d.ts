import { Song } from './models/Song'

export interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  isDisabled: boolean
  repeated: boolean
  category: 'TOP' | 'POPULAR' | 'FAVORITE' | 'RESULTS' | null
  songs: Song[]
  favorites: Song[]
  selectedSong?: Song
  selectedIndex?: number
}