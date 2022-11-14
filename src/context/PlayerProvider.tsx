import { createContext, useReducer, useEffect } from 'react'
import { MusicPlayerState } from '@/types'
import { Song } from '@/models'
import { db } from '@/config'
import { getSongs } from '@/services'
import { musicPlayerReducer } from '@/reducers'

const initialState: MusicPlayerState = {
  play: false,
  isLoading: true,
  repeated: false,
  isDisabled: true,
  categorie: null,
  selectedSong: null,
  selectedIndex: null,
  songs: [],
  results: [],
  topSongs: [],
}

interface PlayerContext extends MusicPlayerState { 
  onPrevious: () => void
  onPlay: (_song: Song, _cat: MusicPlayerState['categorie']) => void
  onNext: () => void
  handleFavorite: (_song: Song) => void
  onSetResult: (_songs: Song[]) => void
}

export const MusicPlayerContext = createContext<PlayerContext>({
  ...initialState,
  onPrevious: () => {},
  onPlay: (_song, _cat) => {},
  onNext: () => {},
  handleFavorite: (_song) => {},
  onSetResult: (_songs) => {}
})

export default function PlayerContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)
  const isDisabled = !playerState.selectedSong

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
  
  const handleFavorite = (song: Song) => {
    dispatch({ 
      type: 'FAVORITE', 
      payload: song
    })

    db.toggleSong(song)
  }

  const onSetResult = (songs: Song[]) => {
    dispatch({
      type: 'SET_RESULTS',
      payload: songs
    })
  }

  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      isDisabled,
      onPrevious,
      onPlay,
      onNext,
      handleFavorite,
      onSetResult
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}