import { createContext, useReducer, useEffect } from 'react'
import { MusicPlayerState } from '@/types'
import { Song } from '@/models'
import { musicPlayerReducer } from '@/reducers'
import { getSongs } from '@/services'

const initialState: MusicPlayerState = {
  play: false,
  isLoading: true,
  isDisabled: true,
  categorie: null,
  selectedSong: null,
  songs: [],
  topSongs: [],
}

interface Context extends MusicPlayerState { 
  onPlay: (_song: Song, _cat: MusicPlayerState['categorie']) => void
}

export const MusicPlayerContext = createContext<Context>({
  play: false,
  categorie: null,
  isLoading: true,
  isDisabled: true,
  selectedSong: null,
  songs: [],
  topSongs: [],
  onPlay: (_song, _cat) => {}
})

export default function PlayerContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)

  useEffect(() => {
    getSongs()
      .then((res) => dispatch({
        type: 'SET_SONGS',
        payload: res
      }))
  }, [])

  const onPlay = (
    song: Song,
    categorie: MusicPlayerState['categorie']
  ) => {
    dispatch({
      type: 'PLAY',
      payload: {
        song, categorie
      }
    })
  }
  
  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      onPlay,
      isDisabled: !playerState.selectedSong,
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}