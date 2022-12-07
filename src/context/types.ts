import { Song } from '@/models/Song'

export type MusicPlayerState = {
  play: boolean
  isLoading: boolean
  isDisabled: boolean
  repeated: boolean
  category: string | null
  songs: Song[]
  favorites: Song[]
  selectedSong?: Song
  selectedIndex?: number
}