import { MusicPlayerState } from '../types'
import { Song } from '@/models/Song'
import { Types } from './types'
import {
  map,
  decrease,
  filter,
  findIndex,
  getFavorite,
  getLength,
  getSongs,
  increase,
  mapByIndex,
  parseFavorite,
  parseSongTo
} from './utils'

type ReducerAction =  | {
  type: Types.PAUSE | Types.ADD_FAVORITE | Types.DELETE_FAVORITE,
  payload: Song
} | {
  type: Types.PREVIOUS | Types.NEXT
} | {
  type: Types.PLAY
  payload: {
    song: Song
    category: string | null
    songs?: Song[]
  }
} | {
  type: Types.SET_FAVORITES
  payload: Song[]
}

const musicPlayerReducer = (
  state: MusicPlayerState, 
  action: ReducerAction
) => {
  switch (action.type) {
    case Types.PLAY:
      return {
        ...state,
        play: true,
        category: action.payload.category,
        selectedSong: parseSongTo(getFavorite(state.favorites, action.payload.song), true),
        selectedIndex: findIndex(getSongs(state, action.payload.songs), action.payload.song.id),
        songs: map(getSongs(state, action.payload.songs), action.payload.song.id)
      }
    case Types.PAUSE:
      return {
        ...state,
        play: false,
        selectedSong: parseSongTo(state.selectedSong, false),
        songs: state.songs
          .map((song) => parseSongTo(song, false)!)
      }
    case Types.PREVIOUS:
      const prevIndex = decrease(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedIndex: prevIndex,
        selectedSong: parseSongTo(getFavorite(state.favorites, state.songs[prevIndex]), true) || state.selectedSong,
        ...(
          state.songs.length > 0 && {
            songs: mapByIndex(state.songs, prevIndex)
          }
        )
      }
    case Types.NEXT:
      const nextIndex = increase(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedSong: parseSongTo(getFavorite(state.favorites, state.songs[nextIndex]), true) || state.selectedSong,
        selectedIndex: nextIndex,
        ...(
          state.songs.length > 0 && {
            songs: mapByIndex(state.songs, nextIndex)
          }
        )
      }
    case Types.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        songs: action.payload
      }
    case Types.ADD_FAVORITE:
      return {
        ...state,
        selectedSong: {...action.payload, isFavorite: true },
        favorites: state.favorites.concat(parseSongTo(parseFavorite(action.payload), false)!),
        ...(state.category === 'Favorites' && {
          songs: state.songs.concat(parseFavorite(action.payload)!)
        })
      }
    case Types.DELETE_FAVORITE:
      return {
        ...state,
        favorites: filter(state.favorites, action.payload.id),
        selectedSong: parseFavorite(state.selectedSong, false),
        ...(state.category === 'Favorites' && { 
          songs: filter(state.songs, action.payload.id) 
        })
      }
    default: return state
  }
}
export default musicPlayerReducer

