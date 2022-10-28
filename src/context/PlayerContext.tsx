import { createContext, useContext, useReducer } from 'react'

const MusicPlayerContext = createContext(null)

type MusicPlayerState = {
  play: boolean
  pause: boolean
  selectedSong: string | null
}

type ReducerAction = {
  type: 'PLAY',
} | {
  type: 'PAUSE'
} | {
  type: 'SKIP'
}

const initialState: MusicPlayerState = {
  play: false,
  pause: false,
  selectedSong: null
}

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        play: true,
        pause: false,
      }
    case 'PAUSE':
      return {
        ...state,
        play: false,
        pause: true,
      }
    default: return state
  }
}

function PlayerContextProvider(props: { children: React.ReactNode }) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)

  return (
    <MusicPlayerContext.Provider value={null}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}
export const usePlayerContext = () => useContext(MusicPlayerContext)
export default PlayerContextProvider