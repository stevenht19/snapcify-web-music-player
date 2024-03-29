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
  onPlay(song: Song, category: string, songs?: Song[]): void
  onPrevious(): void
  onNext(): void
  onSaveNext(): void
  setSongs(song: Song[]): void
  addSongsToQueue(song: Song[]): void
  deleteFromQueue(song: Song): void
  handleFavorite(song: Song): void
}

export const MusicPlayerContext = createContext<PlayerContext>({
  ...initialState,
  onPrevious: () => {},
  onPlay: () => {},
  onNext: () => {},
  onSaveNext: () => {},
  handleFavorite: () => {},
  setSongs: () => {},
  addSongsToQueue: () => {},
  deleteFromQueue: () => {}
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

  const onPrevious = () => {
    if (playerState.songs.length > 1) {
      dispatch({ type: Types.PREVIOUS })
    }
  }

  const onPlay = (
    song: Song,
    category: MusicPlayerState['category'],
    songs?: Song[]
  ) => {
    if (!song.url) return

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

  const onNext = () => {
    if (playerState.songs.length > 1) {
      dispatch({ type: Types.NEXT }) 
    } 
  }

  const onSaveNext = () => {
    if (playerState.songs.length > 1) {
      dispatch({ type: Types.NEXT })
      return
    }

    dispatch({
      type: Types.PAUSE,
      payload: playerState.selectedSong!
    })

  }

  const handleFavorite = (song: Song) => {
    dispatch({
      type: !song.isFavorite ? Types.ADD_FAVORITE : Types.DELETE_FAVORITE,
      payload: song
    })
    
    db.toggleSong(song)
  }

  const addSongsToQueue = (songs: Song[]) => {
    dispatch({
      type: Types.ADD_TO_QUEUE,
      payload: songs
    })
  }

  const deleteFromQueue = (song: Song) => {
    dispatch({
      type: Types.DELETE_SONG,
      payload: song
    })
  }

  const setSongs = (songs: Song[]) => {
    dispatch({
      type: Types.SET_SONGS,
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
      setSongs,
      onSaveNext,
      handleFavorite,
      addSongsToQueue,
      deleteFromQueue
    }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}