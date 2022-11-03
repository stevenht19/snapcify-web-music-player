import { createContext, useReducer, useEffect } from 'react'
import { Song } from '@/models'
import { SongResponse } from '@/models/responses'
import { songAdapter } from '@/adapters'

interface MusicPlayerState {
  play: boolean
  isLoading: boolean
  selectedSong: Song
  songs: Song[]
}

type ReducerAction = {
  type: 'PLAY',
  payload: {
    song: Song
    hasChanged?: boolean
  }
} | {
  type: 'SET_SONGS',
  payload: Song[]
} | {
  type: 'STOP_LOADING'
}

const initialState: MusicPlayerState = {
  play: false,
  isLoading: true,
  songs: [],
  selectedSong: {
    id: '',
    title: '',
    artist: '',
    image: '',
    url: '',
  }
}

interface Context extends MusicPlayerState { 
  onPlay: (_song: Song, _hasChanged?: boolean) => void
}

export const MusicPlayerContext = createContext<Context>({
  play: false,
  isLoading: true,
  songs: [],
  selectedSong: {
    id: '',
    image: '',
    url: '',
    title: '',
    artist: ''
  },
  onPlay: (_song, _hasChanged) => {}
})

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
        songs: action.payload
      }
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false
      }
    default: return state
  }
}

const API = `${import.meta.env.VITE_API}/songs`

function PlayerContextProvider(props: { children: React.ReactNode }) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response: SongResponse[] = await (await fetch(API)).json()
        const songs: Song[] = response.map((res) => songAdapter(res))
        dispatch({ 
          type: 'SET_SONGS', 
          payload: songs 
        })
      } catch (e) {
        console.log(e)
      } finally {
        dispatch({ type: 'STOP_LOADING' })
      }
    }
    getSongs()
  }, [])

  const onPlay = (song: Song, hasChanged?: boolean) => {
    dispatch({
      type: 'PLAY',
      payload: { 
        song,
        ...(hasChanged && { hasChanged })
      }
    })
  }
  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      onPlay
    }}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}
export default PlayerContextProvider