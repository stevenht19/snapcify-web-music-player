import { useState, useEffect } from 'react'
import { db } from '@/config'
import { Song } from '@/models'
import { useMusicPlayer } from '@/hooks'

export const useFavorites = () => {
  const { 
    play, 
    selectedSong,
    category, 
    onPlay,
    handleFavorite
  } = useMusicPlayer()
  const [favorites, setFavorites] = useState<Song[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getFetch = async () => {
      const songs = await db.getSongs()
      let actualSongs = songs
        .map((song) => (song.id === selectedSong?.id) && (play) ? {
          ...song, 
          isPlaying: true 
        } : song)
      setFavorites(actualSongs)
      setLoading(false)
    }
    getFetch()
  }, [])

  const handleFavoritePlay = (_song: Song) => {
    let actualSongs = favorites.map((song) => (song.id === _song.id) ? {
        ...song, 
        isPlaying: !song.isPlaying 
      } : song)
    setFavorites(actualSongs)
    onPlay(_song, category)
  }

  const onDeleteFavorite = (song: Song) => {
    setFavorites(songs => songs.filter(s => s.id !== song.id))
    /*if (!repeated) return
    handleFavorite(song)*/
  }

  return {
    favorites,
    isLoading,
    handleFavoritePlay,
    onDeleteFavorite
  }
}