import { createContext, useEffect, useState } from 'react'
import { Song } from '@/models/Song'
import { db } from '@/config'
import { songAlreadyExists } from '../utils/getUniqueSongs'

interface PlaylistContext {
  songs: Song[]
  savedSongs: Song[]
  songsSize: number
  playlistName: string
  clearSongs(): void
  handleAddSong(song: Song, exists: boolean): void
  onSaveSongs(fn: Function, cat: string | null, queueFn: (songs: Song[]) => void):void
  deleteSong(id: Song['id']): void
}

export const PlaylistContext = createContext<PlaylistContext>({
  songs: [],
  savedSongs: [],
  songsSize: 0,
  playlistName: '',
  handleAddSong: () => {},
  clearSongs: () => {},
  onSaveSongs: () => {},
  deleteSong: () => {}
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
    const getData = async () => {
      const songs = await db.songs
        .where('playlist_id')
        .equals(playlistId)
        .toArray()

      setSavedSongs(songs)
    }
    getData()
  }, [playlistId])

  const handleAddSong = (song: Song, exists: boolean) => {
    if (exists) {
      setSongs(songs => songs.filter(({ id }) => id !== song.id))
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

  const onSaveSongs = (fn: Function, category: string | null, queueFn: (songs: Song[]) => void) => {
    const uniqueSongs = songAlreadyExists(savedSongs, songs)

    if (category === playlistName) {
      queueFn(uniqueSongs)
    }

    setSavedSongs([...savedSongs, ...uniqueSongs])
    db.addSongsToPlaylist(uniqueSongs)
    clearSongs()
    fn()
  }

  const deleteSong = (songId: Song['id']) => {
    setSavedSongs((songs) => songs.filter(song => song.id !== songId))
    db.deleteSongFromPlaylist(playlistId, songId)
  }

  return (
    <PlaylistContext.Provider value={{
      songs,
      songsSize,
      playlistName,
      savedSongs,
      clearSongs,
      handleAddSong,
      onSaveSongs,
      deleteSong
    }}>
      {children}
    </PlaylistContext.Provider>
  )
}
export default PlaylistProvider