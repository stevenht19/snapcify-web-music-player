import { MusicPlayerState } from '@/types'
import { Song } from '@/models/Song'
import {
  decrease,
  evalPlayer,
  filter,
  findIndex,
  getFavorite,
  getId,
  getLength,
  getSongs,
  increase,
  map,
  mapByIndex,
  parseFavorite
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
  type: 'ADD_FAVORITE' | 'DELETE_FAVORITE'
  payload: Song
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        category: action.payload.category,
        play: evalPlayer(state, action.payload.song, action.payload.category),
        selectedSong: getFavorite(state.favorites, action.payload.song),
        selectedIndex: findIndex(getSongs(state, action.payload.songs), action.payload.song.id),
        songs: map(
          getSongs(
            state,
            action.payload.songs,
          ),
          getId(action.payload.song)!,
        )
      }
    case 'PREVIOUS':
      const prevIndex = decrease(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedIndex: prevIndex,
        selectedSong: getFavorite(state.favorites, state.songs[prevIndex]),
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
        selectedSong: getFavorite(state.favorites, state.songs[nextIndex]),
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