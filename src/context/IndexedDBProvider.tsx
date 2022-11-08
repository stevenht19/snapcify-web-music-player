import { createContext } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { Song } from '@/models'
import { db } from '@/config/db'

interface Context {
  addSong: (_song: Song) => void
  deleteSong: (_song: Song) => void
}

export const IndexedDBContext = createContext<Context>({
  addSong: () => {},
  deleteSong: () => {}
})

export default function IndexedProvider({ children }: {
  children: React.ReactNode
}) {

  const favoriteSongs = useLiveQuery(() => db.favorites.toArray())

  const addSong = async (song: Song) => {
    await db.favorites.add(song)
  }

  const deleteSong = async (song: Song) => {
    await db.favorites.where('id')
      .equals(song.id)
      .delete()
  }

  return (
    <IndexedDBContext.Provider value={{
      addSong,
      deleteSong
    }}>
      {children}
    </IndexedDBContext.Provider>
  )
}
