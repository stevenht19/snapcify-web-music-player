import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PLAY' | 'PLAY_TOP',
  payload: {
    song: Song
    hasChanged?: boolean
  }
} | {
  type: 'SET_SONGS',
  payload: {
    topSongs: Song[]
    popularSongs: Song[]
  }
} | {
  type: 'STOP_LOADING'
}

const playSong = (song: Song, id: Song['id']) => {
  return (song.id === id) ? 
    {...song, isPlaying: !song.isPlaying } : 
    {...song, isPlaying: false }
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        play: action.payload.hasChanged ? true : !state.play,
        selectedSong: action.payload.song,
        songs: state.songs
          .map((song) => playSong(song, action.payload.song.id))
      }
    case 'PLAY_TOP':
      return {
        ...state,
        play: action.payload.hasChanged ? true : !state.play,
        selectedSong: action.payload.song,
        topSongs: state.topSongs
          .map((song) => playSong(song, action.payload.song.id))
      }
    case 'SET_SONGS':
      return {
        ...state,
        topSongs: action.payload.topSongs,
        songs: action.payload.popularSongs
      }
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false
      }
    default: return state
  }
}
export default musicPlayerReducer