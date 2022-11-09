import { Song, SongResponse } from '@/models'
import { songAdapter } from '@/adapters'
import { getUniqueObjectArray } from '@/utils'
import { db } from '@/config'

const API = `${import.meta.env.VITE_API}/songs`

const getFetch = async (): Promise<SongResponse[]> => {
  return (await fetch(API)).json()
}

const getBreakpoint = (songs: Song[]): number => {
  return Math.floor(songs.length / 2)
}

const getSongs = async () => {
  try {
    const [favorites, response]: [Song[], SongResponse[]] = await Promise.all([
      db.favorites.toArray(),
      getFetch()
    ])

    const data: Song[] = response.map((res) => songAdapter(res))
    const songs = getUniqueObjectArray([...favorites, ...data])

    const breakpoint = getBreakpoint(songs)

    return {
      topSongs: songs.slice(breakpoint),
      popularSongs: songs.slice(0, breakpoint)
    }
  } catch (_) {
    throw new Error('Something went wrong')
  }
}

export default getSongs