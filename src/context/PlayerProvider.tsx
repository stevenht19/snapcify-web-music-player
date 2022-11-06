import { createContext, useReducer, useEffect } from 'react'
import { MusicPlayerState } from '@/types'
import { Song, SongResponse } from '@/models'
import { songAdapter } from '@/adapters'
import { musicPlayerReducer } from '@/reducers'

const initialState: MusicPlayerState = {
  play: false,
  isLoading: true,
  isDisabled: true,
  fromCarousel: false,
  songs: [],
  topSongs: [],
  selectedSong: null
}

type Props = {
  children: React.ReactNode
}

interface Context extends MusicPlayerState { 
  onPlay: (_song: Song, _type?: 'PLAY_TOP') => void
}

export const MusicPlayerContext = createContext<Context>({
  play: false,
  isLoading: true,
  isDisabled: true,
  fromCarousel: false,
  songs: [],
  topSongs: [],
  selectedSong: null,
  onPlay: (_song, _type) => {}
})

const API = `${import.meta.env.VITE_API}/songs`

export default function PlayerContextProvider({ children }: Props) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response: SongResponse[] = await (await fetch(API)).json()
        const songs: Song[] = response.map((res) => songAdapter(res))
        const breakpoint = Math.floor(songs.length / 2)
        
        dispatch({ 
          type: 'SET_SONGS', 
          payload: {
            topSongs: songs.slice(breakpoint),
            popularSongs: songs.slice(0, breakpoint)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        dispatch({ type: 'STOP_LOADING' })
      }
    }
    getSongs()
  }, [])

  const onPlay = (
    song: Song,
    type?: 'PLAY_TOP'
  ) => {
    dispatch({
      type: type || 'PLAY',
      payload: song
    })
  }
  
  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      isDisabled: !playerState.selectedSong,
      onPlay
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}