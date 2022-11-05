import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PLAY',
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

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        play: action.payload.hasChanged ? true : !state.play,
        selectedSong: action.payload.song,
        songs: state
          .songs
          .map((song) => (song.id === action.payload.song.id) ? 
            {...song, isPlaying: !song.isPlaying } : 
            {...song, isPlaying: false }
          )
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