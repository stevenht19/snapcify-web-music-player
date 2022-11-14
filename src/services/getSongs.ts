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
    const { array, repeated } = getUniqueObjectArray([...favorites, ...data])

    const breakpoint = getBreakpoint(array)
    
    return {
      repeated,
      topSongs: array.slice(breakpoint),
      popularSongs: array.slice(0, breakpoint)
    }
  } catch (_) {
    throw new Error("Something went wrong")
  }
}

export default getSongs