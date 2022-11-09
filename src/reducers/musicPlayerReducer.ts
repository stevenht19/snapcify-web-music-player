import { MusicPlayerState } from '@/types'
import { Song } from '@/models'

type ReducerAction = {
  type: 'PLAY',
  payload: {
    song: Song
    categorie?: MusicPlayerState['categorie']
  }
} | {
  type: 'PREVIOUS' | 'NEXT',
} | {
  type: 'SET_SONGS',
  payload: {
    topSongs: Song[]
    popularSongs: Song[]
  }
} | {
  type: 'FAVORITE',
  payload: {
    id: Song['id']
  }
}

function getState (
  state: MusicPlayerState,
  categorie?: MusicPlayerState['categorie']
): Song[] {
  if ((categorie || state.categorie) === 'POPULAR') {
    return state.songs
  } else {
    return state.topSongs
  }
}

function changeSingleSong (
  song: Song, 
  songIndex: number, 
  selectedIndex: MusicPlayerState['selectedIndex']
) {
  return ((songIndex === selectedIndex) ?
  { ...song, isPlaying: !song.isPlaying } :
  { ...song, isPlaying: false })
}

function getSongsByCategorie(
  state: MusicPlayerState,
  actualIndex: MusicPlayerState['selectedIndex'],
  selectedCategorie?: MusicPlayerState['categorie']
) {
  if (selectedCategorie === 'POPULAR') {
    if (state.categorie !== 'POPULAR' && state.categorie !== null) {
      return {
        topSongs: state.topSongs.map((song) => ({
          ...song,
          isPlaying: false
        })),
        songs: state.songs.map((song, i) => changeSingleSong(song, i, actualIndex))
      }
    } else {
      return {
        songs: state
          .songs
          .map((song, i) => changeSingleSong(song, i, actualIndex))
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
          .map((song, i) => (
          changeSingleSong(song, i, actualIndex)
        ))
      }
    } else {
      return {
        topSongs: state.topSongs
          .map((song, i) => (
          changeSingleSong(song, i, actualIndex)
        ))
      }
    }
  }
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY': {
      let selectedIndex = getState(state, action.payload.categorie)
        .findIndex(song => song.id === action.payload.song.id)

      return {
        ...state,
        play: (state.selectedSong?.id === action.payload.song.id) ? !state.play : true,
        selectedSong: action.payload.song,
        selectedIndex: selectedIndex,
        categorie: action.payload.categorie,
        ...(getSongsByCategorie(state, selectedIndex, action.payload.categorie))
      }
    }
    case 'PREVIOUS': {
      let songs = getState(state)
      let size = songs.length - 1
      let index = state.selectedIndex !== -1 ? state.selectedIndex!-- : size;
      
      return {
        ...state,
        play: true,
        selectedIndex: index,
        selectedSong: songs[index],
        ...(state.categorie !== 'POPULAR' ? { 
          topSongs: songs.map((song, i) => changeSingleSong(song, i, index))
        } : {
          songs: state.songs.map((song, i) => changeSingleSong(song, i, index))
        })
      }
    }
    case 'NEXT': {
      let songs = getState(state)
      let size = songs.length
      let index = state.selectedIndex !== size ? state.selectedIndex!++ : 0
      return {
        ...state,
        play: true,
        selectedIndex: index,
        selectedSong: songs[index],
        ...(state.categorie !== 'POPULAR' ? { 
          topSongs: songs.map((song, i) => changeSingleSong(song, i, index))
        } : {
          songs: songs.map((song, i) => changeSingleSong(song, i, index))
        })
      }
    }
    case 'SET_SONGS':
      return {
        ...state,
        topSongs: action.payload.topSongs,
        songs: action.payload.popularSongs,
        isLoading: false
      }
    case 'FAVORITE':
      return {
        ...state,
        songs: state.songs.map((song) => (song.id === action.payload.id) ? 
          ({...song, isFavorite: !song.isFavorite }) : song)
      }
    default: return state
  }
}
export default musicPlayerReducer