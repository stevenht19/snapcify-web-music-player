import { createContext, useReducer, useEffect } from 'react'
import { MusicPlayerState } from '@/types'
import { Song } from '@/models'
import { db } from '@/config'
import { getSongs } from '@/services'
import { musicPlayerReducer } from '@/reducers'
import { useLiveQuery } from 'dexie-react-hooks'

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
  handleFavorite: (_song: Song) => void
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
  onNext: () => {},
  handleFavorite: (_song) => {}
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
    categorie?: MusicPlayerState['categorie']
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

  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      onPrevious,
      onPlay,
      onNext,
      handleFavorite,
      isDisabled: !playerState.selectedSong,
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}