import { createContext, useReducer, useEffect } from 'react'
import { MusicPlayerState } from '@/types'
import { songAdapter } from '@/adapters'
import { musicPlayerReducer } from '@/reducers'
import { Song, SongResponse } from '@/models'

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