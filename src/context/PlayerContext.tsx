import { createContext, useReducer } from 'react'
import { Song } from '@/models'

const songs: Song[] = [
  { 
    id: 0,
    title: 'The Car',
    artist: 'Arctic Monkeys',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/The_Car_by_Arctic_Monkeys_album.jpg',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a'
  },
  { 
    id: 1,
    title: 'The Car',
    artist: 'Arctic Monkeys',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b5/52/bd/b552bda7-a5bf-1c5f-91da-48e0b8783817/mzaf_12548670210804317750.plus.aac.ep.m4a'},
  { 
    id: 2,
    title: 'The Car',
    artist: 'Arctic Monkeys',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Suckitandsee.jpg',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/ae/67/74ae6789-eb84-84aa-6772-c624adb48884/mzaf_15235529366602780394.plus.aac.ep.m4a'},
]

type MusicPlayerState = {
  play: boolean
  selectedSong: Song
  songs: Song[]
}

type ReducerAction = {
  type: 'PLAY',
  payload: {
    song: Song
    hasChanged?: boolean
  }
}

const initialState: MusicPlayerState = {
  play: false,
  songs: songs,
  selectedSong: {
    id: 0,
    title: '',
    artist: '',
    image: '',
    url: '',
  }
}

export const MusicPlayerContext = createContext({
  play: false,
  songs: songs,
  selectedSong: {
    id: 0,
    image: '',
    url: '',
    title: '',
    artist: ''
  },
  onPlay: (_song: Song, _hasChanged?: boolean) => {}
})

const musicPlayerReducer = (state: MusicPlayerState, action: ReducerAction) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        play: action.payload.hasChanged ? true : !state.play,
        selectedSong: action.payload.song,
        songs: state
          .songs
          .map((song) => (song.id === action.payload.song.id) ? 
            {...song, isPlaying: !song.isPlaying } : 
            {...song, isPlaying: false }
          )
      }
    default: return state
  }
}

function PlayerContextProvider(props: { children: React.ReactNode }) {
  const [playerState, dispatch] = useReducer(musicPlayerReducer, initialState)

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