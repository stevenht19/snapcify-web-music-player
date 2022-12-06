import { createContext, useEffect, useState } from 'react'
import { Song } from '@/models/Song'
import { db } from '@/config'
import { songAlreadyExists } from '../utils/getUniqueSongs'

interface PlaylistContext {
  songs: Song[]
  savedSongs: Song[]
  songsSize: number
  playlistName: string
  handleAddSong: (_s: Song) => void
  clearSongs: () => void
  onSaveSongs: (fn: Function) => void
}

export const PlaylistContext = createContext<PlaylistContext>({
  songs: [],
  savedSongs: [],
  songsSize: 0,
  playlistName: '',
  handleAddSong: () => {},
  clearSongs: () => {},
  onSaveSongs: () => {}
})

type Props = {
  children: React.ReactNode
  playlistId: number
  playlistName: string
}

const PlaylistProvider = ({ 
  children, 
  playlistId, 
  playlistName 
}: Props) => {
  const [savedSongs, setSavedSongs] = useState<PlaylistContext['songs']>([])
  const [songs, setSongs] = useState<PlaylistContext['songs']>([])
  const songsSize = songs.length

  useEffect(() => {
    const get = async () => {
      const songs = await db.songs
        .where('playlist_id')
        .equals(playlistId)
        .toArray()

      setSavedSongs(songs)
    }
    get()
  }, [playlistId])

  const handleAddSong = (song: Song) => {
    const alreadyExists = songs.some(s => s.id === song.id)
    if (alreadyExists) {
      setSongs(songs => songs.filter(s => s.id !== song.id))
      return
    }
    setSongs(songs => songs.concat({
      ...song, 
      playlist_id: playlistId 
    }))
  }

  const clearSongs = () => {
    setSongs([])
  }

  const onSaveSongs = (fn: Function) => {
    const uniqueSongs = songAlreadyExists(savedSongs, songs)
    db.addSongsToPlaylist(uniqueSongs)
    setSavedSongs([...savedSongs, ...uniqueSongs])
    clearSongs()
    fn()
  }

  return (
    <PlaylistContext.Provider value={{
      songs,
      songsSize,
      playlistName,
      savedSongs,
      clearSongs,
      handleAddSong,
      onSaveSongs
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
export default PlaylistProvider