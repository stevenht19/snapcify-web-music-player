import { useState, useEffect } from 'react'
import { db } from '@/config'
import { Song } from '@/models'
import { useMusicPlayer } from '@/hooks'

export const useFavorites = () => {
  const { play, selectedSong, onPlay, categorie, handleFavorite } = useMusicPlayer()
  const [favorites, setFavorites] = useState<Song[]>([])

  const handleFavoritePlay = (song: Song) => {
    setFavorites(songs => songs.map((s) => s.id === song.id ? {...s, isPlaying: !s.isPlaying } : s))
    onPlay(song, categorie)
  }

  const onDeleteFavorite = (song: Song) => {
    setFavorites(songs => songs.filter(s => s.id !== song.id))
    handleFavorite(song)
  }

  useEffect(() => {
    const getFetch = async () => {
      const songs = await db.getSongs()
      const actualSongs = songs
        .map((song) => (song.id === selectedSong?.id) && (play) ? {...song, isPlaying: true } : song)
      setFavorites(actualSongs)
    }
    getFetch()
  }, [])

  return {
    favorites,
    handleFavoritePlay,
    onDeleteFavorite
  }
}