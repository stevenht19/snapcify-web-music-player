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
  selectedIndex: null,
  songs: [],
  topSongs: [],
}

interface Context extends MusicPlayerState { 
  onPrevious: () => void
  onPlay: (_song: Song, _cat: MusicPlayerState['categorie']) => void
  onNext: () => void
}

export const MusicPlayerContext = createContext<Context>({
  play: false,
  categorie: null,
  isLoading: true,
  isDisabled: true,
  selectedSong: null,
  selectedIndex: null,
  songs: [],
  topSongs: [],
  onPrevious: () => {},
  onPlay: (_song, _cat) => {},
  onNext: () => {}
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

  const onPrevious = () => {
    dispatch({ type: 'PREVIOUS' })
  }

  const onPlay = (
    song: Song,
    categorie: MusicPlayerState['categorie']
  ) => {
    dispatch({
      type: 'PLAY',
      payload: {
        song, 
        categorie
      }
    })
  }

  const onNext = () => {
    dispatch({ type: 'NEXT' })
  }
  
  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      onPlay,
      onNext,
      onPrevious,
      isDisabled: !playerState.selectedSong,
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}