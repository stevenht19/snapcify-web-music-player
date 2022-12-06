import { createContext, useEffect, useReducer } from 'react'
import { MusicPlayerState } from '@/types'
import { db } from '@/config'
import { Song } from '@/models/Song'
import { musicPlayerReducer } from '@/reducers/musicPlayer'

const initialState: MusicPlayerState = {
  play: false,
  isLoading: true,
  repeated: false,
  isDisabled: true,
  category: null,
  songs: [],
  favorites: []
}

interface PlayerContext extends MusicPlayerState { 
  onPrevious: () => void
  onPlay: (_song: Song, category: string, songs?: Song[]) => void
  onNext: () => void
  handleFavorite: (_song: Song) => void
}

export const MusicPlayerContext = createContext<PlayerContext>({
  ...initialState,
  onPrevious: () => {},
  onPlay: () => {},
  onNext: () => {},
  handleFavorite: () => {},
})

export default function PlayerContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)
  const isDisabled = !playerState.selectedSong

  useEffect(() => {
    db.getSongs()
      .then((res) => {
        dispatch({
          type: 'SET_FAVORITES',
          payload: res
        })
      })
  }, [])

  const onPrevious = () => dispatch({ type: 'PREVIOUS' })

  const onPlay = (
    song: Song,
    category: MusicPlayerState['category'],
    songs?: Song[]
  ) => {
    if (song.isPlaying) {
      dispatch({
        type: 'PAUSE',
        payload: song
      })
      return
    }
    dispatch({
      type: 'PLAY',
      payload: {
        song,
        category,
        songs,
      }
    })
  }

  const onNext = () => dispatch({ type: 'NEXT' })

  const handleFavorite = (song: Song) => {
    dispatch({
      type: !song.isFavorite ? 'ADD_FAVORITE' : 'DELETE_FAVORITE',
      payload: song
    })
    db.toggleSong(song)
  }

  return (
    <MusicPlayerContext.Provider value={{
      ...playerState,
      isDisabled,
      onPrevious,
      onPlay,
      onNext,
      handleFavorite
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}