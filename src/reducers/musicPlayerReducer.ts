import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PLAY' | 'PLAY_TOP',
  payload: Song
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
        play: (state.selectedSong?.id === action.payload.id) ? !state.play : true,
        selectedSong: action.payload,
        fromCarousel: false,
        songs: state.songs
          .map((song) => playSong(song, action.payload.id)),
        topSongs: state.topSongs.map((song) => ({...song, isPlaying: false}))
      }
    case 'PLAY_TOP':
      return {
        ...state,
        play: (state.selectedSong?.id === action.payload.id) ? !state.play : true,
        selectedSong: action.payload,
        fromCarousel: true,
        songs: state.songs.map((song) => ({...song, isPlaying: false})),
        topSongs: state.topSongs
          .map((song) => playSong(song, action.payload.id))
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