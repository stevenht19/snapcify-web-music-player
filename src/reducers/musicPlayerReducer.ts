import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PLAY',
  payload: {
    song: Song
    categorie: MusicPlayerState['categorie']
  }
} | {
  type: 'SET_SONGS',
  payload: {
    topSongs: Song[]
    popularSongs: Song[]
  }
}

const changePlayingState = (song: Song, id: Song['id']) => {
  return (song.id === id) ? 
    {...song, isPlaying: !song.isPlaying } : 
    {...song, isPlaying: false }
}

const evalSongs = (
  state: MusicPlayerState,
  selectedSong: Song,
  categorie: MusicPlayerState['categorie']
) => {
  switch (categorie) {
    case 'CAROUSEL': 
      return {
        ...(state.categorie !== 'CAROUSEL' ? 
          {
            songs: state
              .songs
              .map((song) => ({ ...song, isPlaying: false })),
            topSongs: state
              .topSongs
              .map((song) => (changePlayingState(song, selectedSong.id)))
          } :
          { topSongs: state
              .topSongs
              .map((song) => (changePlayingState(song, selectedSong.id))) }
        )
    }
    case 'POPULAR': 
      return {
        ...(state.categorie !== 'POPULAR' ?
          { 
            topSongs: state
              .topSongs
              .map((song) => ({...song, isPlaying: false })),
            songs: state
              .songs
              .map((song) => changePlayingState(song, selectedSong.id))
          } : 
          { songs: state
              .songs
              .map((song) => changePlayingState(song, selectedSong.id)) }
        )
      }
  }
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        play: (state.selectedSong?.id === action.payload.song.id) ? !state.play : true,
        selectedSong: action.payload.song,
        categorie: action.payload.categorie,
        ...(evalSongs(state, action.payload.song, action.payload.categorie))
      }
    case 'SET_SONGS':
      return {
        ...state,
        topSongs: action.payload.topSongs,
        songs: action.payload.popularSongs,
        isLoading: false
      }
    default: return state
  }
}
export default musicPlayerReducer