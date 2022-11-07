import { Song, SongResponse } from '@/models'
import { songAdapter } from '@/adapters'

const API = `${import.meta.env.VITE_API}/songs`

const getSongs = async () => {
  try {
    const response: SongResponse[] = await (await fetch(API)).json()
    const songs: Song[] = response.map((res) => songAdapter(res))
    const breakpoint = Math.floor(songs.length / 2)
  
    return {
      topSongs: songs.slice(breakpoint),
      popularSongs: songs.slice(0, breakpoint)
    } 
  } catch (_) {
    throw new Error(`Songs couldn't be loaded`)
  }
}

export default getSongs