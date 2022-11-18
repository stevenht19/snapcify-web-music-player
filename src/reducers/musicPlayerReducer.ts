import { MusicPlayerState } from '@/types'
import { Song } from '@/models'
import {
  decrease,
  evalPlayer,
  findIndex,
  getFavorite,
  getId,
  getLength,
  getSongs,
  increase,
  map,
  mapByIndex
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
  type: 'HANDLE_FAVORITE'
  payload: Song
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        category: action.payload.category,
        play: evalPlayer(state, action.payload.song, action.payload.category),
        selectedSong: getFavorite(state.favorites, getId(action.payload.song)!) || action.payload.song,
        selectedIndex: findIndex(getSongs(state, action.payload.songs), getId(action.payload.song)!),
        songs: map(
          getSongs(
            state,
            action.payload.songs,
            action.payload.category
          ),
          getId(action.payload.song)!,
        )
      }
    case 'PREVIOUS':
      const prevIndex = decrease(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedSong: state.songs[prevIndex],
        selectedIndex: prevIndex,
        songs: mapByIndex(state.songs, prevIndex)
      }
    case 'NEXT':
      const nextIndex = increase(state.selectedIndex!, getLength(state.songs));
      return {
        ...state,
        play: true,
        selectedSong: state.songs[nextIndex],
        selectedIndex: nextIndex,
        songs: mapByIndex(state.songs, nextIndex)
      }
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload
      }
    case 'HANDLE_FAVORITE':
      return {
        ...state,
        selectedSong: { ...state.selectedSong!, isFavorite: !state.selectedSong?.isFavorite },
        favorites:
          !action.payload.isFavorite ? state
            .favorites
            .concat(action.payload) :
            state
              .favorites
              .filter(song => song.id !== action.payload.id)
      }
    default: return state
  }
}
export default musicPlayerReducer