import { createContext, useEffect, useReducer } from 'react'
import { MusicPlayerState } from './types'
import { db } from '@/config'
import { Song } from '@/models/Song'
import { musicPlayerReducer } from '@/context/reducers'
import { Types } from './reducers/types'

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
  onPlay(_song: Song, category: string, songs?: Song[]): void
  onPrevious(): void
  onNext(): void
  handleFavorite(_song: Song): void
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
          type: Types.SET_FAVORITES,
          payload: res
        })
      })
  }, [])

  const onPrevious = () => dispatch({ type: Types.PREVIOUS })

  const onPlay = (
    song: Song,
    category: MusicPlayerState['category'],
    songs?: Song[]
  ) => {
    if (song.isPlaying) {
      dispatch({
        type: Types.PAUSE,
        payload: song
      })
      return
    }
    dispatch({
      type: Types.PLAY,
      payload: {
        song,
        category,
        songs,
      }
    })
  }

  const onNext = () => dispatch({ type: Types.NEXT })

  const handleFavorite = (song: Song) => {
    dispatch({
      type: !song.isFavorite ? Types.ADD_FAVORITE : Types.DELETE_FAVORITE,
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