import { MusicPlayerState } from '@/types'
import { Song } from '@/models/Song'
import {
  decrease,
  filter,
  findIndex,
  getFavorite,
  getLength,
  getSongs,
  increase,
  map,
  mapByIndex,
  parseFavorite,
  parseSongTo
} from './utils'

type ReducerAction = {
  type: 'PREVIOUS' | 'NEXT'
} | {
  type: 'PLAY'
  payload: {
    song: Song
    category: MusicPlayerState['category']
    songs?: Song[]
  }
} | {
  type: 'SET_FAVORITES'
  payload: Song[]
} | {
  type: 'PAUSE' |'ADD_FAVORITE' | 'DELETE_FAVORITE'
  payload: Song
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        category: action.payload.category,
        play: true,
        selectedSong: parseSongTo(getFavorite(state.favorites, action.payload.song), true),
        selectedIndex: findIndex(getSongs(state, action.payload.songs), action.payload.song.id),
        songs: map(getSongs(state, action.payload.songs), action.payload.song.id)
      }
    case 'PAUSE':
      return {
        ...state,
        play: false,
        selectedSong: parseSongTo(state.selectedSong!, false),
        songs: state.songs
          .map((song) => parseSongTo(song, false))
      }
    case 'PREVIOUS':
      const prevIndex = decrease(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedIndex: prevIndex,
        selectedSong: parseSongTo(getFavorite(state.favorites, state.songs[prevIndex]), true),
        ...(
          state.songs.length > 1 && {
            songs: mapByIndex(state.songs, prevIndex)
          }
        )
      }
    case 'NEXT':
      const nextIndex = increase(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedSong: parseSongTo(getFavorite(state.favorites, state.songs[nextIndex]), true),
        selectedIndex: nextIndex,
        ...(
          state.songs.length > 1 && {
            songs: mapByIndex(state.songs, nextIndex)
          }
        )
      }
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
        songs: action.payload
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        selectedSong: parseFavorite(state.selectedSong!),
        favorites: state.favorites.concat(action.payload)
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: filter(state.favorites, action.payload.id),
        selectedSong: parseFavorite(state.selectedSong!, false),
        ...(state.category === 'FAVORITE' && { 
          songs: filter(state.songs, action.payload.id) 
        })
      }
    default: return state
  }
}
export default musicPlayerReducer

