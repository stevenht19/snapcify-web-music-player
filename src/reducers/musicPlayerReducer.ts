import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PREVIOUS' | 'NEXT',
} | {
  type: 'PLAY',
  payload: {
    song: Song
    categorie: MusicPlayerState['categorie']
  }
} | {
  type: 'FAVORITE',
  payload: Song
} | {
  type: 'SET_RESULTS',
  payload: Song[]
} | {
  type: 'SET_SONGS',
  payload: {
    topSongs: MusicPlayerState['topSongs']
    popularSongs: MusicPlayerState['songs']
    repeated: MusicPlayerState['repeated']
  }
}

function getState (
  state: MusicPlayerState,
  categorie?: MusicPlayerState['categorie']
): Song[] {
  if ((categorie || state.categorie) === 'POPULAR') {
    return state.songs
  } else if ((categorie || state.categorie) === "CAROUSEL") {
    return state.topSongs
  }
  return state.results
}

function changeSingleSong (
  song: Song,
  selectedSong: Song,
) {
  return ((song.id === selectedSong.id) ?
  { ...song, isPlaying: !song.isPlaying } :
  { ...song, isPlaying: false })
}

function getSongsByCategory(
  state: MusicPlayerState,
  selectedSong: Song,
  selectedCategorie?: MusicPlayerState['categorie'],
) {
  if (selectedCategorie === 'POPULAR') {
    if (state.categorie !== 'POPULAR' && state.categorie !== null) {
      return {
        topSongs: state.topSongs.map((song) => ({
          ...song,
          isPlaying: false
        })),
        songs: state.songs.map((song) => changeSingleSong(song, selectedSong))
      }
    } else {
      return {
        songs: state
          .songs
          .map((song) => changeSingleSong(song, selectedSong))
      }
    }
  } 
  if ((selectedCategorie) === 'CAROUSEL') {
    if (state.categorie !== 'CAROUSEL' && state.categorie !== null) {
      return {
        songs: state.songs
          .map((song) => ({
            ...song,
            isPlaying: false
          })),
        topSongs: state.topSongs
          .map((song) => (
          changeSingleSong(song, selectedSong)
        ))
      }
    }
    return {
      topSongs: state.topSongs
        .map((song) => (
        changeSingleSong(song, selectedSong)
      ))
    }
  }
  if (selectedCategorie === 'RESULT') {
    if (state.categorie === 'POPULAR') {
      return {
        songs: state.results.map((song) => ({...song, isPlaying: false})),
        results: state.results.map((song) => changeSingleSong(song, selectedSong))
      }
    } else if (state.categorie === 'CAROUSEL') {
      return {
        songs: state.results.map((song) => ({...song, isPlaying: false})),
        results: state.results.map((song) => changeSingleSong(song, selectedSong))
      }
    }
    return {
      results: state.results.map((song) => changeSingleSong(song, selectedSong))
    }
  }
}
const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY': {
      let selectedIndex = getState(state, action.payload.categorie)
        .findIndex(song => song.id === action.payload.song.id)

      let hasChanged = state.categorie !== action.payload.categorie
      let isPausing = state.selectedSong?.id === action.payload.song.id
      return {
        ...state,
        play: hasChanged ? true : isPausing ? !state.play : true,
        selectedSong: action.payload.song,
        selectedIndex: selectedIndex,
        categorie: action.payload.categorie,
        ...(getSongsByCategory(state, action.payload.song, action.payload.categorie))
      }
    }
    case 'PREVIOUS': {
      let songs = getState(state)
      let size = songs.length - 1
      let index = state.selectedIndex !== -1 ? state.selectedIndex!-- : size;
      let selectedSong = songs[index]
      return {
        ...state,
        play: true,
        selectedIndex: index,
        selectedSong: selectedSong,
        ...(state.categorie !== 'POPULAR' ? { 
          topSongs: songs.map((song) => changeSingleSong(song, selectedSong))
        } : {
          songs: state.songs.map((song) => changeSingleSong(song, selectedSong))
        })
      }
    }
    case 'NEXT': {
      let songs = getState(state)
      let size = songs.length
      let index = state.selectedIndex !== size ? state.selectedIndex!++ : 0
      let selectedSong = songs[index]
      return {
        ...state,
        play: true,
        selectedIndex: index,
        selectedSong: selectedSong,
        ...(state.categorie !== 'POPULAR' ? { 
          topSongs: songs.map((song) => changeSingleSong(song, selectedSong))
        } : {
          songs: songs.map((song) => changeSingleSong(song, selectedSong))
        })
      }
    }
    case 'SET_SONGS': {
      return {
        ...state,
        topSongs: action.payload.topSongs,
        songs: action.payload.popularSongs,
        repeated: action.payload.repeated,
        isLoading: false
      }
    }
    case 'FAVORITE': {
      return {
        ...state,
        selectedSong: state.selectedSong?.id === action.payload.id ? 
          {...state.selectedSong, isFavorite: !state.selectedSong.isFavorite } : state.selectedSong,
        songs: state.songs.map((song) => (song.id === action.payload.id) ? 
          ({...song, isFavorite: !song.isFavorite }) : song)
      }
    }
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
      }
    default: return state
  }
}
export default musicPlayerReducer